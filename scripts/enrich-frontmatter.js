#!/usr/bin/env node
/**
 * Enriches SKILL.md frontmatter with category, author, version, cover, screenshots, icon.
 * Assigns categories based on existing role field or skill name/description analysis.
 *
 * Run: node scripts/enrich-frontmatter.js
 */

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '..', 'skills');

// ---------------------------------------------------------------------------
// Category mapping — skill folder ID → category
// ---------------------------------------------------------------------------

const CATEGORY_MAP = {
  // Product
  'ai-product-strategy': 'Product',
  'platform-strategy': 'Product',
  'product-strategy': 'Product',
  'ideal-customer-profiler': 'Product',
  'product-vision': 'Product',
  'product-metrics': 'Product',
  'north-star-metric': 'Product',
  'product-market-fit': 'Product',
  'product-experiment': 'Product',
  'backlog-prioritizer': 'Product',
  'product-launch': 'Product',
  'next-iteration': 'Product',
  'ship-products': 'Product',
  'product-feedback-miner': 'Product',
  'user-research': 'Product',
  'jobs-to-be-done': 'Product',
  'onboarding-design': 'Product',
  'product-ops': 'Product',
  'growth-loops': 'Product',
  'work-backwards': 'Product',
  'ab-testing': 'Product',
  'design-review': 'Product',
  'survey-design': 'Product',
  'behavior-design': 'Product',
  'product-taste': 'Product',
  'product-discovery': 'Product',
  'run-dogfooding': 'Product',
  'extension-authoring': 'Product',
  'frontend-design': 'Product',
  'canvas-design': 'Product',
  'create-prd': 'Product',
  'value-proposition': 'Product',
  'change-rollout': 'Product',
  'set-okrs-goals': 'Product',
  'define-the-problem': 'Product',
  'scope-ruthlessly': 'Product',
  'pivot-navigator': 'Product',
  'saas-metrics': 'Product',
  'gtm-motions': 'Product',
  'gtm-strategy': 'Product',
  'gtm-pricing': 'Product',
  'pricing-eval': 'Product',
  'product-led-sales': 'Product',
  'web-artifacts-builder': 'Product',
  'pmm-strategy': 'Product',

  // Sales
  'revenue-pipeline-audit': 'Sales',
  'pipeline-health-analyzer': 'Sales',
  'callable-lead-count': 'Sales',
  'enterprise-closing': 'Sales',
  'challenger-sale': 'Sales',
  'champion-identifier': 'Sales',
  'deal-momentum-analyzer': 'Sales',
  'founder-led-sales': 'Sales',
  'sales-questions': 'Sales',
  'contact-hunter': 'Sales',
  'meddic-call-prep-auto': 'Sales',
  'inbound-lead-qualifier': 'Sales',
  'intent-signal-aggregator': 'Sales',
  'prospect-enrich': 'Sales',
  'prospect-refresh': 'Sales',
  'personalization-at-scale': 'Sales',
  'cold-email-sequence-generator': 'Sales',
  'cold-email': 'Sales',
  'prospect-research-to-cadence': 'Sales',
  'voice-call-intelligence': 'Sales',
  'sales-methodology-implementer': 'Sales',
  'stakeholder-map': 'Sales',
  'portfolio-deal-linker': 'Sales',
  'sales-revenue': 'Sales',
  'sales-enablement': 'Sales',
  'sales-compensation': 'Sales',
  'sales-team-builder': 'Sales',
  'value-prop-statements': 'Sales',
  'crm-integration': 'Sales',
  'competitive-battlecard': 'Sales',
  'competitor-analysis': 'Sales',
  'competitor-teardown': 'Sales',
  'competitor-ad-extractor': 'Sales',
  'linkedin-sales-navigator-alt': 'Sales',
  'morning-brief': 'Sales',
  'negotiate-offers': 'Sales',
  'beachhead-segment': 'Sales',
  'blue-ocean-strategy': 'Sales',

  // Marketing
  'campaign-debrief': 'Marketing',
  'launch-marketing': 'Marketing',
  'content-strategy': 'Marketing',
  'social-content': 'Marketing',
  'content-idea-generator': 'Marketing',
  'content-marketing': 'Marketing',
  'social-selling-content-generator': 'Marketing',
  'optimize-social-posts': 'Marketing',
  'youtube-summary': 'Marketing',
  'article-insights': 'Marketing',
  'weekly-digest': 'Marketing',
  'email-template-generator': 'Marketing',
  'email-welcome-series': 'Marketing',
  'email-platform-picker': 'Marketing',
  'email-deliverability': 'Marketing',
  'email-segmentation': 'Marketing',
  'follow-up-email': 'Marketing',
  'email-compliance-scorer': 'Marketing',
  'copywriting': 'Marketing',
  'landing-page-generator': 'Marketing',
  'referral-program': 'Marketing',
  'community-building': 'Marketing',
  'brand-storytelling': 'Marketing',
  'brand-guidelines': 'Marketing',
  'brand-voice': 'Marketing',
  'domain-name-brainstorm': 'Marketing',
  'theme-factory': 'Marketing',
  'slack-gif-creator': 'Marketing',
  'win-back-campaign': 'Marketing',

  // Operations
  'org-design': 'Operations',
  'org-health': 'Operations',
  'org-transformation': 'Operations',
  'team-rituals': 'Operations',
  'team-culture': 'Operations',
  'onboarding': 'Operations',
  'hiring-interview': 'Operations',
  'candidate-eval': 'Operations',
  'job-descriptions': 'Operations',
  'delegate-work-effectively': 'Operations',
  'effective-meetings': 'Operations',
  'sprint-ceremonies': 'Operations',
  'team-velocity-tracker': 'Operations',
  'manage-timelines': 'Operations',
  'manage-up': 'Operations',
  'manage-your-energy': 'Operations',
  'personal-productivity': 'Operations',
  'team-offsite': 'Operations',
  'brainstorm-session': 'Operations',
  'decision-framework': 'Operations',
  'post-mortem': 'Operations',
  'run-effective-1-1s': 'Operations',
  'link-related-documents': 'Operations',
  'internal-comms': 'Operations',
  'meeting-outcome-observer': 'Operations',
  'log-key-decisions': 'Operations',
  'plan-under-uncertainty': 'Operations',

  // Strategy
  'financial-data': 'Strategy',
  'fundraising': 'Strategy',
  'board-meeting': 'Strategy',
  'board-deck': 'Strategy',
  'startup-ideas': 'Strategy',
  'market-sizing': 'Strategy',
  'business-model': 'Strategy',
  'business-model-canvas': 'Strategy',
  'founder-coach': 'Strategy',
  'pm-coach': 'Strategy',
  'systems-thinking': 'Strategy',
  'strategic-priorities': 'Strategy',
  'stakeholder-alignment': 'Strategy',
  'trade-off-eval': 'Strategy',
  'media-relations': 'Strategy',
  'sort-invoices': 'Strategy',
  'trading-alert-scheduler': 'Strategy',
  'scenario-analysis': 'Strategy',
  'marketplace-liquidity': 'Strategy',
  'drive-partnerships': 'Strategy',
  'cross-functional': 'Strategy',

  // Communication
  'presentations': 'Communication',
  'write-clarity': 'Communication',
  'planning-prompts': 'Communication',
  'doc-coauthoring': 'Communication',
  'conversation-coach': 'Communication',
  'release-notes': 'Communication',
  'internal-narrative': 'Communication',
  'translation': 'Communication',
  'meeting-summary': 'Communication',
  'weekly-meeting-recap': 'Communication',
  'research-synthesis': 'Communication',
  'research': 'Communication',
  'deep-research': 'Communication',
  'business-proposal': 'Communication',
  'meeting-recap-and-follow-up': 'Communication',
  'last-meeting-update': 'Communication',
  'suggest-topics': 'Communication',
  'meeting-prep': 'Communication',

  // Customer Success
  'boost-retention': 'Customer Success',
  'churn-risk': 'Customer Success',
  'data-analysis': 'Customer Success',
  'cs-health-check': 'Customer Success',
  'lookalike-customer-finder': 'Customer Success',

  // Career
  'career-transitions': 'Career',
  'difficult-conversations': 'Career',
  'resume-tailoring': 'Career',
  'find-mentors': 'Career',
  'imposter-syndrome': 'Career',
  'promotion-case': 'Career',

  // Productivity
  'action-items': 'Productivity',
  'recent-todos': 'Productivity',
  'email-drafting': 'Productivity',
  'debug-like-expert': 'Productivity',
  'kaizen-method': 'Productivity',
};

// ---------------------------------------------------------------------------
// Frontmatter update logic
// ---------------------------------------------------------------------------

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return null;
  return { yaml: match[1], body: match[2] };
}

function hasField(yaml, field) {
  return new RegExp(`^${field}:`, 'm').test(yaml);
}

function addField(yaml, field, value) {
  if (hasField(yaml, field)) return yaml;
  if (typeof value === 'string') {
    return `${yaml}\n${field}: "${value}"`;
  }
  return `${yaml}\n${field}: ${JSON.stringify(value)}`;
}

function getExistingCategory(yaml) {
  const roleMatch = yaml.match(/^role:\s*"?([^"\n]+)"?/m);
  if (roleMatch) return roleMatch[1].trim();
  const catMatch = yaml.match(/^category:\s*"?([^"\n]+)"?/m);
  if (catMatch) return catMatch[1].trim();
  return null;
}

function enrichSkill(folder) {
  const filePath = path.join(SKILLS_DIR, folder, 'SKILL.md');
  if (!fs.existsSync(filePath)) return false;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = parseFrontmatter(raw);
  if (!parsed) return false;

  let { yaml } = parsed;
  const { body } = parsed;

  // Category: prefer map, then existing role/category, then "General"
  const existingCategory = getExistingCategory(yaml);
  const mappedCategory = CATEGORY_MAP[folder];
  const category = mappedCategory || existingCategory || 'General';

  // Remove old category line and add updated one
  yaml = yaml.replace(/^category:.*$/m, '').replace(/\n{2,}/g, '\n');
  yaml = addField(yaml, 'category', category);

  // Author
  if (!hasField(yaml, 'author')) {
    yaml = addField(yaml, 'author', 'Harmony');
  }

  // Version
  if (!hasField(yaml, 'version')) {
    yaml = addField(yaml, 'version', '1.0.0');
  }

  // Icon placeholder
  if (!hasField(yaml, 'icon')) {
    yaml = addField(yaml, 'icon', 'sparkles');
  }

  // Cover placeholder
  if (!hasField(yaml, 'cover')) {
    yaml = addField(yaml, 'cover', '');
  }

  // Screenshots placeholder
  if (!hasField(yaml, 'screenshots')) {
    yaml = `${yaml}\nscreenshots: []`;
  }

  const updated = `---\n${yaml}\n---\n${body}`;

  if (updated !== raw) {
    fs.writeFileSync(filePath, updated, 'utf-8');
    return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const folders = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  let updated = 0;
  let skipped = 0;

  for (const folder of folders) {
    if (enrichSkill(folder)) {
      updated++;
    } else {
      skipped++;
    }
  }

  console.log(`Done: ${updated} updated, ${skipped} skipped`);
}

main();
