// Selected work. Each project gets a card on the homepage and its own page.

export interface Project {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  entry: string; // timeline entry id, for "See in timeline"
  tagline: string; // one line for the card
  area: string; // card kicker
  summary: string; // card + meta description
  stats?: { value: string; label: string }[];
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
  people?: string;
  links: { label: string; href: string; note?: string }[];
  quote?: string;
  schemaType: 'ScholarlyArticle' | 'SoftwareApplication' | 'CreativeWork';
}

export const projects: Project[] = [
  {
    slug: 'retinal-screening',
    title: 'AI screening for retinal disease: from algorithm to clinical evidence',
    kicker: 'RetInSight | ARVO',
    year: '2025–2026',
    entry: 'retinsight-lead',
    area: 'Clinical AI',
    tagline: 'An OCT screening algorithm, and a reader study showing it improves clinicians’ detection by 42%.',
    summary:
      'I led development of a deep learning algorithm that screens OCT scans for retinal biomarkers, then ran a reader study to test whether it helps clinicians decide better. It does: detection performance improved by 42%.',
    stats: [
      { value: '+42%', label: 'detection performance with AI support' },
      { value: '11%', label: 'faster grading' },
      { value: '81,903', label: 'real-world OCT scans screened' },
    ],
    sections: [
      {
        heading: 'Why it matters',
        paragraphs: [
          'Most retinal disease is first seen outside specialist clinics, by optometrists and in community eye care. If AI can flag the right biomarkers on an OCT scan at that point, patients who need a specialist get referred sooner and those who don’t are spared the trip.',
        ],
      },
      {
        heading: 'Step 1: building the algorithm (ARVO 2025)',
        paragraphs: [
          'I led development of a deep learning algorithm that detects retinal biomarkers on Topcon Maestro OCT scans: RPE loss, intraretinal and subretinal fluid, and pigment epithelial detachment. A built-in image-quality module keeps false positives down on messy real-world data.',
        ],
        bullets: [
          'Trained and validated on 11,000 expert-labelled B-scans from the Medical University of Vienna.',
          'Average F1 score of 0.83 on an independent dataset, and a false-positive rate of 0.02% in 1,000 patients under 35.',
          'Applied to 81,903 real-world scans from 57,963 patients. Biomarkers were found in 2.1% of patients, rising to 4.7% in those over 50, and were present even in 40–50-year-olds (0.9%), a case for screening younger populations.',
        ],
      },
      {
        heading: 'Step 2: does it help clinicians? (ARVO 2026)',
        paragraphs: [
          'Building a model is half the job. The other half is showing that it improves decisions. In a crossover reader study, two graders assessed 112 real-world OCT volumes from primary eye care twice: once alone and once with the AI report. An independent clinical expert set the reference.',
        ],
        bullets: [
          'Overall detection performance improved by 42% (Cohen’s κ from 0.41 to 0.58, p < 0.01).',
          'Sensitivity for RPE loss rose from 0.64 to 0.96, and for subretinal hyporeflective spaces from 0.65 to 0.95.',
          'Graders were 11% faster with AI support.',
          'Every false negative co-occurred with another detected biomarker, which limits the risk of a missed referral.',
        ],
      },
      {
        heading: 'Presentation',
        paragraphs: [
          'I presented the reader study in Denver on 3 May 2026, in one of the largest sessions at ARVO 2026.',
        ],
      },
    ],
    quote: 'While many fear AI will replace clinicians, our study shows it actually empowers them.',
    people:
      'Co-authors include Reena Chopra (Topcon Healthcare), Wolf-Dieter Vogl, Charles C. Wykoff, Ursula Schmidt-Erfurth and Ariadne Whitby.',
    links: [
      { label: 'ARVO 2026 abstract (IOVS)', href: 'https://iovs.arvojournals.org/article.aspx?articleid=2812929' },
      { label: 'ARVO 2025 abstract (IOVS)', href: 'https://iovs.arvojournals.org/article.aspx?articleid=2804004' },
      {
        label: 'Ophthalmology Management coverage',
        href: 'https://www.ophthalmologymanagement.com/issues/2026/arvo/ai-assistance-in-identifying-retinal-disease-biomarkers-in-oct-scans',
      },
    ],
    schemaType: 'ScholarlyArticle',
  },
  {
    slug: 'oecd-paper',
    title: 'Should I stay or should I go? Housing and residential mobility across OECD countries',
    kicker: 'OECD Economics Department Working Paper No. 1626',
    year: '2020',
    entry: 'oecd',
    area: 'Economic research',
    tagline: 'What makes people move home across OECD countries, and how housing policy helps or hinders it.',
    summary:
      'A cross-country study of what makes people move home, and how housing policy helps or hinders it. I co-authored the paper and did the entire statistical analysis and methodology.',
    stats: [
      { value: 'No. 1626', label: 'OECD Economics Department Working Paper' },
      { value: '3', label: 'regions of household microdata: EU, US, Australia' },
    ],
    sections: [
      {
        heading: 'The question',
        paragraphs: [
          'Residential mobility differs hugely across countries: more than 40% of people move within five years in Australia and the US, under 10% in parts of Southern and Eastern Europe. We asked which housing policies explain the gap.',
        ],
      },
      {
        heading: 'Findings',
        bullets: [
          'A more responsive housing supply goes with higher mobility, so land-use and planning reform can make moving easier.',
          'Higher transaction costs, such as transfer taxes, lower mobility, especially for young first-time buyers.',
          'Strict rental regulation lowers mobility, especially for renters and lower-income households.',
          'Cash and in-kind housing support go with more mobility.',
        ],
      },
      {
        heading: 'My role',
        paragraphs: [
          'Co-author with Orsetta Causa. I did the entire statistical analysis and methodology on household-level microdata, and presented the findings to stakeholders and OECD country desks.',
        ],
      },
    ],
    links: [
      {
        label: 'Paper on oecd.org',
        href: 'https://www.oecd.org/en/publications/should-i-stay-or-should-i-go-housing-and-residential-mobility-across-oecd-countries_d91329c2-en.html',
      },
      {
        label: 'OECD ECOSCOPE blog post',
        href: 'https://oecdecoscope.blog/2020/11/04/should-i-stay-or-should-i-go-housing-and-residential-mobility-across-oecd-countries/',
      },
      { label: 'DOI 10.1787/d91329c2-en', href: 'https://doi.org/10.1787/d91329c2-en' },
    ],
    schemaType: 'ScholarlyArticle',
  },
  {
    slug: 'thesis',
    title: 'Moving beyond efficiency: a novel framework to measure trade-flow resilience',
    kicker: 'MSc thesis | Toulouse School of Economics × University of Zurich',
    year: '2021',
    entry: 'tse',
    area: 'Econometrics',
    tagline: 'A new framework for measuring how trade flows recover from shocks, built during COVID.',
    summary:
      'COVID stress-tested global trade in real time. I set up a collaboration with the University of Zurich and developed a way to measure trade-flow resilience where none existed before.',
    stats: [
      { value: '2', label: 'dimensions of resilience: recovery and reorientation' },
      { value: 'MRSTAR', label: 'multiple-regime smooth transition model' },
    ],
    sections: [
      {
        heading: 'The opportunity',
        paragraphs: [
          'The pandemic was a rare natural experiment: supply chains around the world were hit at once, and you could watch how trade flows reacted. But there was no established way to measure how resilient a trade flow is. I set up a collaboration with the University of Zurich to build one.',
        ],
      },
      {
        heading: 'The framework',
        paragraphs: [
          'I defined resilience along two dimensions: recovery, a trade flow’s ability to bounce back after a shock, and reorientation, its ability to move to a more desirable state. I then showed how both can be parametrised in a multiple-regime smooth transition autoregressive (MRSTAR) model.',
        ],
        bullets: [
          'Tested the method’s limits in Monte Carlo simulations and documented the caveats for practical use.',
          'Applied it to German car exports and US consumer-electronics imports using UN Comtrade data.',
          'Descriptive evidence suggests that well-established trade relationships are more resilient.',
        ],
      },
    ],
    people:
      'Supervised by Prof. Ralph Ossa (then Chair of the Department of Economics at the University of Zurich, later Chief Economist of the WTO). Advised by Dr. Mathilde Le Moigne (then a postdoctoral researcher at UZH’s Kühne Center).',
    links: [
      {
        label: 'Read the thesis',
        href: '/files/pichelmann-2021-msc-thesis-trade-flow-resilience.pdf',
        note: 'PDF, 3.9 MB',
      },
    ],
    schemaType: 'ScholarlyArticle',
  },
  {
    slug: 'sustainability-challenge',
    title: 'Sustainability Data Science Challenge',
    kicker: 'Co-hosted by Capgemini and Microsoft',
    year: '2021',
    entry: 'challenge',
    area: 'Computer vision',
    tagline: 'Satellite-image segmentation for CO₂, biodiversity and solar potential, built with a university colleague. 1st for model performance.',
    summary:
      'Together with a colleague from university, I built a satellite-imagery segmentation pipeline that estimates CO₂ emissions, biodiversity and solar potential. It placed 1st for model performance and 2nd overall.',
    stats: [
      { value: '1st', label: 'for model performance' },
      { value: '2nd', label: 'overall' },
      { value: '+80%', label: 'performance from custom augmentation' },
    ],
    sections: [
      {
        heading: 'What we built',
        paragraphs: [
          'A colleague from university and I entered as a team. We built a Keras image-segmentation pipeline that reads satellite images and estimates CO₂ emissions, biodiversity and solar potential. The training data was heavily imbalanced, so we designed custom augmentation to rebalance it, which improved performance by 80%.',
        ],
      },
    ],
    links: [],
    schemaType: 'CreativeWork',
  },
  {
    slug: 'up',
    title: 'Up! More time with friends',
    kicker: 'Side project | iOS & Android',
    year: '2026',
    entry: 'up',
    area: 'Side project',
    tagline: 'A small app for seeing which friends are free today, shipped to both app stores.',
    summary:
      'A small social app I built with agentic coding and shipped to the App Store and Google Play. One tap says “I’m free”, and your friends see who’s up today.',
    stats: [
      { value: '~200', label: 'users' },
      { value: '2', label: 'app stores' },
    ],
    sections: [
      {
        heading: 'The idea',
        paragraphs: [
          'A free evening, nothing planned, and no idea which friends are around. Up! fixes that: share that you’re up for something, today or later in the week, and friends see it right away. No endless chats, no feed, no algorithm, and no tracking.',
        ],
      },
      {
        heading: 'How I built it',
        paragraphs: [
          'I built and shipped it end to end with agentic coding, from the product idea to the releases on both app stores.',
        ],
      },
    ],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/up-more-time-with-friends/id6762877395' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.jacobpichelmann.up' },
      { label: 'Instagram @up.withfriends', href: 'https://www.instagram.com/up.withfriends/' },
    ],
    schemaType: 'SoftwareApplication',
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
