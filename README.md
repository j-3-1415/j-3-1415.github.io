# jacob-pichelmann-website

Personal site: intro, a git-graph timeline of career and education, and selected work.
Built with [Astro](https://astro.build) as fully static HTML.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where things live

- `src/data/site.ts`: name, headline, bio, links, and the third-person summary used for SEO
- `src/data/timeline.ts`: timeline entries (branches) and their events (rows)
- `src/data/projects.ts`: selected-work cards and project pages
- `src/lib/graph.ts`: lays the timeline out as a git graph at build time
- `src/lib/schema.ts`: schema.org JSON-LD for the person and projects
- `src/pages/llms.txt.ts`: plain-text summary for AI search
