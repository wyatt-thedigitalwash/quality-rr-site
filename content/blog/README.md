# Blog Content

Blog posts are stored as MDX files in this directory. The blog index page picks up new posts automatically.

## Frontmatter Schema

Each .mdx file must include YAML frontmatter at the top:

```yaml
---
title: "Post Title Here"              # Required. The H1 and meta title.
description: "Short description..."    # Required. Meta description, under 160 chars.
date: "2026-05-18"                    # Required. ISO date format.
updatedDate: "2026-05-20"            # Optional. ISO date, shown if post is updated.
author: "Quality Restoration & Renovations"  # Optional. Defaults to firm name.
featuredImage: "/images/filename.jpg" # Required. Path to image in /public/images/.
featuredImageAlt: "Descriptive alt"   # Required. SEO alt text for featured image.
category: "Renovation Guide"          # Required. One of: Local Authority, Project Spotlight, Renovation Guide.
excerpt: "A short 1-2 sentence..."    # Required. Used on the blog index page.
readingTime: 5                        # Optional. Auto-calculated if omitted.
internalLinks:                        # Optional. Related internal page paths.
  - /services/kitchen-remodeling
  - /locations/tampa
---
```

## Creating a New Post

1. Create a new file named `your-slug.mdx` in this directory
2. Add the frontmatter block above the content
3. Write post content in standard markdown below the frontmatter
4. The blog index page picks it up automatically on next build

## Image Convention

Featured images live in `/public/images/`, referenced by path like `/images/filename.jpg` in frontmatter.

## Categories

- **Local Authority**: Tampa Bay specific knowledge (neighborhoods, code, permits)
- **Project Spotlight**: Case studies and project walkthroughs
- **Renovation Guide**: General educational content about renovation
