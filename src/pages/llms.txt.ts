// Plain-text summary for language models and AI search (llmstxt.org convention).

import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { entries, fmtRange } from '../data/timeline';
import { projects } from '../data/projects';

export const GET: APIRoute = () => {
  const timeline = [...entries]
    .sort((a, b) => b.start.localeCompare(a.start))
    .map((e) => {
      const when = fmtRange(e.start, e.end, e.status);
      const tags = e.tags?.length ? ` (${e.tags.join('; ')})` : '';
      return `- ${when}: ${e.title}, ${e.org}${tags}`;
    });

  const work = projects.map((p) => `- [${p.title}](${site.url}/projects/${p.slug}/): ${p.summary}`);

  const body = [
    `# ${site.name}`,
    '',
    `> ${site.summary}`,
    '',
    site.bio.join('\n\n'),
    '',
    '## Timeline',
    ...timeline,
    '',
    '## Selected work',
    ...work,
    '',
    '## Profiles',
    ...site.links.map((l) => `- [${l.label}](${l.href})`),
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
