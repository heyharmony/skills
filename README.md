# Harmony Skills

Repository of AI skills for the Harmony marketplace. Each skill is a structured prompt template that guides AI conversations for specific business tasks.

## Structure

```
skills/
├── {skill-name}/
│   ├── SKILL.md              # Skill definition (frontmatter + prompt body)
│   ├── README.md             # Brief overview
│   ├── icon/                 # Optional: skill icon
│   │   └── icon.png
│   └── images/               # Optional: cover image + screenshots
│       ├── cover.png
│       ├── screenshot-1.png
│       └── screenshot-2.png
├── scripts/
│   ├── build-index.js        # Generates index.json from all skills
│   └── enrich-frontmatter.js # One-time script to add missing frontmatter fields
├── index.json                # Auto-generated index of all skills (do not edit manually)
└── .github/workflows/
    └── build-index.yml       # CI: regenerates index.json on push to main
```

## SKILL.md Format

Each skill has a `SKILL.md` file with YAML frontmatter and a markdown body:

```yaml
---
name: "Extract Action Items"
description: "Extract every action item from your last meeting..."
category: "Productivity"
author: "Harmony"
version: "1.0.0"
icon: "sparkles"
cover: ""
screenshots: []
dependencies: []
connectors:
  - name: "Linear"
    reason: "Pull bug reports with reproduction steps"
---

## Purpose
...

## When to Use
...

## Instructions
...

## Output Format
...

## Example
...

## Edge Cases
...
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Human-readable skill name |
| `description` | Yes | One-line description (used in marketplace cards) |
| `category` | Yes | One of: Marketing, Product, Sales, Operations, Strategy, Communication, Customer Success, Career, Productivity |
| `author` | Yes | Author name (default: "Harmony") |
| `version` | Yes | Semantic version (default: "1.0.0") |
| `icon` | No | Icon name or URL (populated by CI from `icon/` folder) |
| `cover` | No | Cover image URL (populated by CI from `images/cover.png`) |
| `screenshots` | No | Screenshot URLs (populated by CI from `images/screenshot-*.png`) |
| `dependencies` | No | List of required dependencies |
| `connectors` | No | List of integrations the skill works with |

### Body

The markdown body after the frontmatter `---` separator is the full prompt/instructions. It is stored as the `prompt` field in the index and served to the Harmony platform.

## How It Works

### index.json

The `index.json` file at the repo root is the single source of truth consumed by the Harmony backend. It contains all skills with their metadata and full prompt content.

**Do not edit `index.json` manually.** It is regenerated automatically.

### CI Pipeline

On every push to `main` that changes files in `skills/` or `scripts/`:

1. **GitHub Actions** runs `node scripts/build-index.js`
2. The script scans all `skills/*/SKILL.md` files
3. Parses YAML frontmatter and markdown body
4. If AWS/R2 credentials are configured, uploads images from `icon/` and `images/` folders to CDN
5. Generates `index.json` with all skills, including CDN URLs for images
6. Commits `index.json` back to the repo

### Image Handling

When a contributor adds images to a skill folder:

```
skills/my-skill/
├── icon/
│   └── icon.png          → uploaded to CDN as marketplace/skills/my-skill/icon/icon.png
└── images/
    ├── cover.png          → uploaded to CDN, used as cover image
    ├── screenshot-1.png   → uploaded to CDN, added to screenshots array
    └── screenshot-2.png   → uploaded to CDN, added to screenshots array
```

- `icon/` — First image file becomes the skill icon
- `images/cover.png` — File named `cover.*` becomes the cover image
- `images/screenshot-*.png` — All other files become screenshots (sorted alphabetically)

Images are uploaded to R2/S3 with `Cache-Control: public, max-age=31536000, immutable` and served via `public-media.heyharmony.com`.

### Harmony Backend Integration

The Harmony backend fetches `index.json` from this repo via the GitHub Contents API (single request, authenticated with a GitHub token). Results are cached in Redis with no TTL — cache is invalidated manually via `POST /api/marketplace/cache/invalidate` or on backend restart.

```
This repo                    Harmony Backend              Frontend
─────────                    ───────────────              ────────
SKILL.md files               GET index.json               GET /api/marketplace/skills
     │                       (GitHub API, 1 req)          (from Redis cache)
     ▼                              │                           │
CI: build-index.js                  ▼                           ▼
     │                       Redis (no TTL)              React Query (5 min)
     ▼                              │                           │
index.json ──────────────────►  Parse + cache  ──────────►  Render UI
```

## Adding a New Skill

1. Create a new folder under `skills/` with a kebab-case name
2. Add `SKILL.md` with frontmatter and prompt body
3. Add `README.md` with a brief overview
4. Optionally add `icon/icon.png` and `images/cover.png`, `images/screenshot-*.png`
5. Open a PR to `main`
6. After merge, CI regenerates `index.json` and the skill appears in the marketplace

## GitHub Secrets (for CI)

| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | R2/S3 access key for image uploads |
| `AWS_SECRET_ACCESS_KEY` | R2/S3 secret key |
| `AWS_REGION` | Bucket region (e.g., `auto` for R2) |
| `AWS_S3_BUCKET_NAME` | Bucket name (e.g., `public-media`) |
| `CDN_BASE_URL` | Public CDN URL (e.g., `https://public-media.heyharmony.com`) |

Without these secrets, `build-index.js` still generates `index.json` but with local image paths instead of CDN URLs.
