// Profile data shared by the page, the meta tags and the JSON-LD.
// Visible copy is first person; `summary` is the third-person sentence for machines.

export const site = {
  url: 'https://j-3-1415.github.io',
  name: 'Jacob Pichelmann',
  role: 'Head of AI Development',
  org: 'RetInSight',
  orgParent: 'Topcon Healthcare',
  location: 'Vienna, Austria',
  headline: 'I build medical AI that holds up in the clinic.',
  summary:
    'Jacob Pichelmann is Head of AI Development at RetInSight (Topcon Healthcare) in Vienna, where he leads the team developing AI for retinal OCT imaging.',
  bio: [
    'At RetInSight, a Medical University of Vienna spin-off and part of Topcon Healthcare since 2025, I lead the AI engineering team that takes models for retinal imaging from data and clinical annotation to validated, certified, deployed product.',
    'I came to medical AI through econometrics. I trained at the Toulouse School of Economics, graduating top of my track, and did empirical research at the OECD and the University of Zurich. That grounding in measuring things rigorously still shapes how I build and evaluate models.',
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jacob-pichelmann' },
    { label: 'GitHub', href: 'https://github.com/j-3-1415' },
    // TODO: confirm which email address should be public.
  ],
  knowsAbout: [
    'Medical AI',
    'Deep learning',
    'Optical coherence tomography (OCT)',
    'Retinal imaging',
    'Model evaluation and validation',
    'Medical device software',
    'Econometrics',
  ],
  alumniOf: [
    { name: 'Toulouse School of Economics', url: 'https://www.tse-fr.eu' },
    { name: 'Vienna University of Economics and Business', url: 'https://www.wu.ac.at' },
    { name: 'University of Vienna', url: 'https://www.univie.ac.at' },
  ],
} as const;
