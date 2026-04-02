#!/usr/bin/env node
/**
 * Test S3 upload — uploads a test image and verifies CDN URL.
 * Uses AWS SDK directly (no AWS CLI needed).
 *
 * Run: node scripts/test-s3-upload.js
 * Requires: AWS env vars from harmony backend .env
 */

const path = require('path');
const fs = require('fs');

// Load env from harmony backend (last definition wins, like shell behavior)
const envPath = path.join(__dirname, '..', '..', 'harmony', 'backend', '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('#') || !trimmed) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx);
    const val = trimmed.slice(eqIdx + 1);
    if (/^[A-Z0-9_]+$/.test(key)) {
      process.env[key] = val;
    }
  }
}

async function main() {
  // Import from harmony's node_modules
  const sdkPath = path.join(__dirname, '..', '..', 'harmony', 'node_modules', '@aws-sdk', 'client-s3');
  const { S3Client, PutObjectCommand, HeadObjectCommand } = require(sdkPath);

  const bucket = process.env.AWS_S3_BUCKET_NAME;
  const region = process.env.AWS_S3_BUCKET_REGION || process.env.AWS_REGION || 'auto';
  const endpoint = process.env.AWS_S3_BUCKET_ENDPOINT || process.env.AWS_S3_ENDPOINT || '';
  const forcePathStyle = process.env.AWS_S3_BUCKET_FORCE_PATH_STYLE === 'true' || process.env.AWS_S3_FORCE_PATH_STYLE === 'true';
  const cdnBase = (process.env.CDN_BASE_URL || process.env.AWS_S3_BUCKET_CDN_URL || `https://${bucket}.s3.${region}.amazonaws.com`).replace(/\/$/, '');

  console.log(`Bucket: ${bucket}`);
  console.log(`Region: ${region}`);
  console.log(`Endpoint: ${endpoint || '(default AWS)'}`);
  console.log(`Path style: ${forcePathStyle}`);
  console.log(`CDN: ${cdnBase}`);

  const accessKeyId = process.env.AWS_S3_BUCKET_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_S3_BUCKET_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY;

  const clientConfig = {
    region,
    credentials: { accessKeyId, secretAccessKey },
  };
  if (endpoint) {
    clientConfig.endpoint = endpoint;
    clientConfig.forcePathStyle = forcePathStyle;
  }

  const client = new S3Client(clientConfig);

  const testFile = path.join(__dirname, '..', 'skills', 'action-items', 'icon', 'icon.png');
  if (!fs.existsSync(testFile)) {
    console.error('Test file not found:', testFile);
    process.exit(1);
  }

  const s3Key = 'marketplace/skills/action-items/icon/icon-test.png';

  // Check if exists
  try {
    await client.send(new HeadObjectCommand({ Bucket: bucket, Key: s3Key }));
    console.log(`Already exists: ${cdnBase}/${s3Key}`);
  } catch {
    // Upload
    console.log('Uploading...');
    await client.send(new PutObjectCommand({
      Bucket: bucket,
      Key: s3Key,
      Body: fs.readFileSync(testFile),
      ContentType: 'image/png',
      CacheControl: 'public, max-age=31536000, immutable',
    }));
    console.log(`Uploaded: ${cdnBase}/${s3Key}`);
  }

  console.log(`\nTest URL: ${cdnBase}/${s3Key}`);
  console.log('Try opening this URL in your browser to verify CDN works.');
}

main().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
