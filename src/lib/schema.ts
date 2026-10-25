// schema.org JSON-LD. The Person node carries a stable @id so project pages can point back to it.

import { site } from '../data/site';
import type { Project } from '../data/projects';

export const personId = `${site.url}/#person`;

export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${site.url}/`,
  name: `${site.name}: ${site.role} at ${site.org}`,
  mainEntity: {
    '@type': 'Person',
    '@id': personId,
    name: site.name,
    givenName: 'Jacob',
    familyName: 'Pichelmann',
    url: `${site.url}/`,
    description: site.summary,
    jobTitle: site.role,
    worksFor: {
      '@type': 'Organization',
      name: site.org,
      url: 'https://www.retinsight.com',
      parentOrganization: { '@type': 'Organization', name: site.orgParent },
    },
    workLocation: { '@type': 'Place', name: site.location },
    alumniOf: site.alumniOf.map((a) => ({ '@type': 'CollegeOrUniversity', name: a.name, url: a.url })),
    knowsAbout: site.knowsAbout,
    sameAs: site.links.map((l) => l.href),
  },
});

export const projectSchema = (p: Project) => {
  const url = `${site.url}/projects/${p.slug}/`;
  const external = p.links.filter((l) => l.href.startsWith('http')).map((l) => l.href);
  const base = {
    '@context': 'https://schema.org',
    '@type': p.schemaType,
    name: p.title,
    description: p.summary,
    url,
    author: { '@id': personId, '@type': 'Person', name: site.name },
    ...(external.length && { sameAs: external }),
  };
  if (p.schemaType === 'ScholarlyArticle') return { ...base, headline: p.title, datePublished: p.year.slice(0, 4) };
  if (p.schemaType === 'SoftwareApplication')
    return {
      ...base,
      applicationCategory: 'SocialNetworkingApplication',
      operatingSystem: 'iOS, Android',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    };
  return base;
};
