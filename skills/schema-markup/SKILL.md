---
title: "Schema Markup Implementation"
description: "Generate and implement JSON-LD structured data (schema.org) to enable Google rich results, knowledge panels, star ratings in search, and improved AI content understanding. Covers Organization, Product, Article, FAQ, HowTo, Event, LocalBusiness, BreadcrumbList schemas."
role: "Marketing"
action: "Execute"
connectors:
  - id: "google-drive"
    reason: "Pull product descriptions, pricing, feature documentation"
  - id: "slack"
    reason: "Extract FAQ patterns, customer pain points, feature discussions from team channels"
  - id: "hubspot"
    reason: "Access product catalog, deals, pricing tiers for Product schema generation"
  - id: "notion"
    reason: "Reference documentation, FAQ databases, content guidelines"
connectorOptional: true
frequency: "on-demand"
---

## Purpose

Enable teams to add structured data (JSON-LD) to web pages so Google can surface rich results—star ratings, FAQ answers, pricing, availability, breadcrumbs—and AI systems better understand your content. This skill bridges your Harmony conversation history (customer FAQs, product discussions) with schema.org markup.

## When to Use

1. **You're launching a product page** and want pricing, availability, and review ratings visible in search results.
2. **You have a growing FAQ section** and want answers to appear directly in Google's snippet carousel.
3. **You're an e-commerce or SaaS company** needing Product, Review, or Pricing schema to compete in rich snippets.
4. **Your blog articles** should claim authorship, publication date, and featured images in search results.
5. **You run events or webinars** and need Event schema with registration links and dates in search.
6. **You have multiple locations or services** and need LocalBusiness or Organization schema for knowledge panels.
7. **Your how-to guides or recipes** should show step-by-step instructions in search results.

## Instructions

1. **Identify page types**: List all key page templates on your site (homepage, product, article, FAQ, event, etc.). Note which schema.org types apply (Organization, Product, Article, FAQPage, HowTo, Event, LocalBusiness, BreadcrumbList).

2. **Audit existing markup**: If using connectors, extract relevant content from Google Drive, Slack, Notion, or HubSpot. Identify what structured data already exists on each page. Check if JSON-LD is present using browser dev tools or https://schema.org/validator.

3. **Map data to schema fields**: For each page type, match your content to schema.org properties. Example: Product schema needs name, description, price, currency, availability, review aggregate rating. Extract this from HubSpot or your content docs.

4. **Generate JSON-LD markup**: Using the schema definitions and mapped data, build JSON-LD blocks for each page. Use `@context: "https://schema.org"` and include `@type` (Organization, Product, Article, etc.). For pages with multiple schemas, wrap in `@graph: []`.

5. **Add to HTML head**: Insert JSON-LD in a `<script type="application/ld+json">` tag in your page's `<head>` or body. For static sites, add directly to template. For React/Next.js, use next-seo or react-helmet. For WordPress, use Yoast SEO or RankMath plugins.

6. **Combine schemas where needed**: A product page might have Organization + Product + Review schemas. Use `@graph` array to nest multiple @type blocks under one script tag, or create separate tags.

7. **Validate with Google Rich Results Test**: Paste your URL (or JSON directly) into https://search.google.com/test/rich-results. Fix any warnings—missing required fields, invalid formats, unrecognized enums.

8. **Monitor in Google Search Console**: After implementing, check Coverage reports and Rich Results reports to confirm Google found and indexed your markup. Watch for errors like "missing required property" and remediate.

9. **Update dynamically if needed**: For product catalogs or blogs, regenerate JSON-LD when content changes. Use server-side rendering or client-side scripts to inject live data into schema blocks.

10. **Test across browsers and tools**: Validate using Schema.org's validator, Google's Rich Results Test, and Bing's markup validator to ensure compatibility.

## Output Format

Generate a JSON-LD schema block for each page type. Include:

- **@context**: Always `"https://schema.org"`
- **@type**: Schema type (Organization, Product, Article, FAQPage, HowTo, etc.)
- **Required fields**: Vary by type (name, url, logo, contactPoint for Organization; name, description, price, currency, availability for Product; etc.)
- **Optional fields**: Add depth (image, sameAs, aggregateRating, author, datePublished, etc.)
- **Validation notes**: Flag missing required fields, clarify enum values (e.g., availability InStock/OutOfStock/PreOrder)

### Template

```json
{
  "@context": "https://schema.org",
  "@type": "SCHEMA_TYPE_HERE",
  "name": "Page/Item Name",
  "description": "Short description (50–160 chars for best search appearance)",
  "url": "https://example.com/page-path",
  "image": {
    "@type": "ImageObject",
    "url": "https://example.com/image.jpg",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2026-03-22",
  "dateModified": "2026-03-22",
  "publisher": {
    "@type": "Organization",
    "name": "Your Company",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.8,
    "ratingCount": 156,
    "bestRating": 5,
    "worstRating": 1
  }
}
```

**For multi-schema pages** (e.g., product with reviews and organization):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "name": "...", ... },
    { "@type": "Product", "name": "...", ... },
    { "@type": "AggregateRating", "ratingValue": 4.8, ... }
  ]
}
```

## Example

**Fictional Company**: Brightpath CRM (B2B SaaS platform for small sales teams)

**Pages to markup**: Homepage (Organization), Pricing page (Product + BreadcrumbList), Help Center (FAQPage), Blog article on CRM best practices (Article).

### Organization Schema (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brightpath CRM",
  "url": "https://brightpath.io",
  "logo": "https://brightpath.io/logo.png",
  "description": "Sales CRM software built for teams under 50 people. Manage deals, automate follow-ups, and close faster.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "telephone": "+1-844-555-0123",
    "email": "support@brightpath.io",
    "availableLanguage": ["en"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/brightpath-crm",
    "https://twitter.com/brightpathcrm"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Tech Plaza",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94103",
    "addressCountry": "US"
  }
}
```

### Product Schema (Pricing Page)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://brightpath.io"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Pricing",
          "item": "https://brightpath.io/pricing"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Brightpath CRM Professional Plan",
      "description": "Full-featured CRM with automation, reporting, and team collaboration for growing sales teams.",
      "url": "https://brightpath.io/pricing",
      "image": "https://brightpath.io/images/pricing-screenshot.png",
      "brand": {
        "@type": "Brand",
        "name": "Brightpath"
      },
      "offers": {
        "@type": "Offer",
        "price": "99",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://brightpath.io/pricing",
        "seller": {
          "@type": "Organization",
          "name": "Brightpath CRM"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.7,
        "ratingCount": 289,
        "bestRating": 5,
        "worstRating": 1
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah Martinez"
          },
          "datePublished": "2026-02-10",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": 5
          },
          "reviewBody": "Best CRM for our team size. Intuitive and actually does what we need without bloat."
        }
      ]
    }
  ]
}
```

### FAQPage Schema (Help Center)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I sync Brightpath CRM with my email?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Brightpath integrates with Gmail, Outlook, and Apple Mail. We automatically log emails to deals and sync contact history so nothing falls through the cracks."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a free trial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 14 days free. No credit card required. You get full access to all features including automation, reporting, and up to 3 team members."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Professional and Enterprise plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional ($99/mo) includes up to 10 users, custom fields, and API access. Enterprise adds dedicated support, SSO, advanced security, and unlimited users. Contact sales for Enterprise pricing."
      }
    }
  ]
}
```

### Article Schema (Blog)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "5 CRM Best Practices for 2026",
  "description": "Learn how top sales teams use CRM to organize deals, automate follow-ups, and grow revenue.",
  "image": "https://brightpath.io/blog/crm-best-practices.jpg",
  "datePublished": "2026-03-15",
  "dateModified": "2026-03-20",
  "author": {
    "@type": "Person",
    "name": "James Chen"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Brightpath CRM",
    "logo": {
      "@type": "ImageObject",
      "url": "https://brightpath.io/logo.png",
      "width": 250,
      "height": 60
    }
  },
  "articleBody": "Best practices for modern CRM...[article text]...",
  "wordCount": 2400
}
```

## Edge Cases

1. **Dynamic pricing or inventory**: If price or availability changes hourly (e.g., stock levels), use server-side rendering or client-side JS to inject current values into JSON-LD. Static schema blocks won't update automatically.

2. **Multi-language sites**: Create separate schema blocks for each language, or use `inLanguage` property. Don't rely on one schema for all languages—Google may not parse it correctly.

3. **Affiliate or syndicated content**: If you republish content, adjust `author` and `datePublished` to credit original source. Use `isBasedOn` to reference the original article.

4. **Structured data conflicts**: Avoid contradictions (e.g., price in schema doesn't match page display). Google will notice and may ignore your markup. Keep schema and page content in sync.

5. **Schema clutter**: Don't add schema for every element. Focus on high-value items (products, FAQs, articles, organizations). Too much markup can trigger "unusual structure" warnings in Rich Results Test.

6. **Testing incomplete pages**: Schema must reference real, published URLs. Testing on localhost won't work in Google's Rich Results Test. Deploy to staging or production first, or use the JSON-LD pasting option.

---

**Next Steps**: After generating markup, validate with Google Rich Results Test, implement via your tech stack, monitor in Search Console, and re-validate quarterly as content updates.
