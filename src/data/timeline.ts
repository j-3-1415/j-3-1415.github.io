// Entries behind the path graph. Each one is a card that opens on the side;
// how they sit in the graph lives in data/path.ts.

export type Category = 'career' | 'education' | 'builder';

export interface Link {
  label: string;
  href: string;
}

export interface Publication {
  title: string;
  venue: string;
  href: string;
  firstAuthor?: boolean;
}

export interface Entry {
  id: string;
  category: Category;
  org: string;
  orgNote?: string;
  title: string;
  location?: string;
  start: string; // YYYY-MM, or YYYY when the month is unknown
  end?: string; // omitted = ongoing
  status?: string; // shown instead of the end date, e.g. "In progress"
  story: string[]; // 2–3 short first-person paragraphs for the side card
  tags?: string[];
  roles?: { title: string; from: string; to?: string }[];
  publications?: Publication[];
  links?: Link[];
  projects?: string[];
}

const iovs = (id: number) => `https://iovs.arvojournals.org/article.aspx?articleid=${id}`;

const retinsightNote =
  'Medical University of Vienna spin-off building AI for retinal OCT analysis. Part of Topcon Healthcare since May 2025.';
const retinsightLink = { label: 'retinsight.com', href: 'https://www.retinsight.com' };

export const entries: Entry[] = [
  {
    id: 'retinsight-head',
    category: 'career',
    org: 'RetInSight',
    orgNote: retinsightNote,
    title: 'Head of AI Development',
    location: 'Vienna, Austria',
    start: '2026-06',
    story: [
      'Since June 2026 I lead the AI engineering department, with five direct reports and full ownership of how we develop AI.',
      'My job is to keep our development engine running: a team that consistently delivers state-of-the-art models and methods in retinal imaging, a framework that scales with what we will build next, and a clear strategic direction for our AI work.',
      'That includes shaping our regulated development process under MDR and the EU AI Act, representing AI development in audits, and working closely with clinical, regulatory and product colleagues.',
    ],
    links: [retinsightLink],
    projects: ['retinal-screening'],
  },
  {
    id: 'retinsight-lead',
    category: 'career',
    org: 'RetInSight',
    orgNote: retinsightNote,
    title: 'AI Development Lead',
    location: 'Vienna, Austria',
    start: '2025-02',
    end: '2026-06',
    tags: ['First author at ARVO 2025 & 2026', 'Acquired by Topcon, May 2025'],
    story: [
      'Alongside my work as a developer, I took on responsibility for how we work: refining parts of our machine-learning lifecycle process and leading selected projects both organisationally and technically, from planning through to delivery.',
      'In this time I led the development of an AI screening algorithm for retinal biomarkers on OCT, and the reader study showing that it helps clinicians make better decisions, which I presented at ARVO 2025 and 2026.',
    ],
    publications: [
      {
        title: 'Improving community-based OCT screening through real-time AI-based biomarker visualization',
        venue: 'ARVO 2026 | IOVS 67(7):331',
        href: iovs(2812929),
        firstAuthor: true,
      },
      {
        title: 'AI-based OCT screening for retinal biomarkers: results from large real-world data',
        venue: 'ARVO 2025 | IOVS 66(8):5462',
        href: iovs(2804004),
        firstAuthor: true,
      },
      {
        title: 'Explainability vs. data efficiency: comparing specialized and foundation models for retinal feature classification',
        venue: 'ARVO 2026 | IOVS 67(7):5661',
        href: iovs(2812819),
      },
      {
        title: 'Evaluating the robustness of an OCT biomarker detection model in a predominantly healthy cohort',
        venue: 'ARVO 2026 | IOVS 67(7):5660',
        href: iovs(2812820),
      },
      {
        title: 'Prevalence and characterization of pigment epithelial detachment and hyporeflective spaces detected on OCT using AI in optometry',
        venue: 'ARVO 2026 | IOVS 67(7):922',
        href: iovs(2814311),
      },
      {
        title: 'A multi-stage filtering framework for large-scale cohorting of patients with diabetic macular edema',
        venue: 'ARVO Imaging in the Eye 2026 | IOVS 67(9):PB0050',
        href: iovs(2818283),
      },
    ],
    links: [retinsightLink],
    projects: ['retinal-screening'],
  },
  {
    id: 'retinsight-dl',
    category: 'career',
    org: 'RetInSight',
    orgNote: retinsightNote,
    title: 'Deep Learning Engineer',
    location: 'Vienna, Austria',
    start: '2022-02',
    end: '2025-02',
    tags: ['Promoted after 10 months', 'First author at ARVO 2024'],
    story: [
      'I joined RetInSight as a junior, supporting model development and improving how we evaluate our models. Within a year I took ownership and technical leadership of one algorithm, biomarker segmentation on scans from Triton OCT devices, and later of segmentation models in further domains.',
      'With the support of colleagues, I was responsible for the whole lifecycle: data sourcing and our in-house annotation process, model optimisation, validation (which matters enormously in a clinical setting, from writing the validation plan to running it), and packaging models so they run reliably in production rather than only in an experiment.',
    ],
    roles: [
      { title: 'Deep Learning Engineer', from: '2022-12', to: '2025-02' },
      { title: 'Junior Deep Learning Engineer', from: '2022-02', to: '2022-12' },
    ],
    publications: [
      {
        title:
          'Navigating the complex landscape: identification of clinical and subclinical features that affect the reliability of fluid biomarker measurement',
        venue: 'ARVO 2024 | IOVS 65(7):3759',
        href: iovs(2794970),
        firstAuthor: true,
      },
      {
        title: 'Can AI provide more consistent fluid measurements in nAMD across OCT devices than humans?',
        venue: 'ARVO 2024 | IOVS 65(7):5636',
        href: iovs(2795219),
      },
    ],
    links: [retinsightLink],
  },
  {
    id: 'up',
    category: 'builder',
    org: 'Side project',
    title: 'Up! More time with friends',
    start: '2026-08',
    story: [
      'A personal project built around a small idea: make it easier to actually meet friends by letting them say on which day they are up for something.',
      'I built it with today’s agentic coding tools and shipped it to the App Store and Google Play, where around 200 people now use it.',
    ],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/up-more-time-with-friends/id6762877395' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.jacobpichelmann.up' },
      { label: 'Instagram', href: 'https://www.instagram.com/up.withfriends/' },
    ],
    projects: ['up'],
  },
  {
    id: 'challenge',
    category: 'builder',
    org: 'Co-hosted by Capgemini and Microsoft',
    title: 'Sustainability Data Science Challenge',
    start: '2021-10',
    end: '2021-10',
    tags: ['1st for model performance', '2nd overall'],
    story: [
      'A challenge co-hosted by Capgemini and Microsoft: estimate CO₂ emissions, biodiversity and solar potential from satellite images. I took part together with a colleague from university.',
      'We built a Keras segmentation pipeline and designed custom augmentation to rebalance the skewed training data, which improved performance by 80% and took us to first place for model performance and second overall.',
    ],
    projects: ['sustainability-challenge'],
  },
  {
    id: 'uzh',
    category: 'career',
    org: 'University of Zurich',
    orgNote: 'Department of Economics, Kühne Center.',
    title: 'Research Assistant',
    location: 'Remote',
    start: '2020-11',
    end: '2021-08',
    story: [
      'Alongside my master’s, I worked remotely as a research assistant at the University of Zurich’s Kühne Center with Dr. Mathilde Le Moigne, building a dataset of around 40 million trade and macroeconomic observations.',
      'The analysis was presented in the Kühne Center Impact Series and became the starting point for my master’s thesis with Prof. Ralph Ossa.',
    ],
    projects: ['thesis'],
  },
  {
    id: 'tse',
    category: 'education',
    org: 'Toulouse School of Economics',
    orgNote: 'Ranked #10 economics department worldwide and #3 in Europe (RePEc, 2026). Home of Nobel laureate Jean Tirole.',
    title: 'MSc Econometrics & Empirical Economics',
    location: 'Toulouse, France',
    start: '2019-09',
    end: '2021-09',
    tags: ['Valedictorian, Econometrics track', 'Highest honours', 'TSE scholarship 2020'],
    story: [
      'I chose Toulouse because it is one of the best places in continental Europe for quantitative economics, and it lived up to that: two extremely challenging but rewarding years, in which I learned as much from my brilliant classmates as from the faculty.',
      'I specialised in econometrics, focusing on statistical modelling, empirical analysis, high-dimensional models and forecasting, and in my second year I finished top of my track as valedictorian.',
    ],
    links: [{ label: 'tse-fr.eu', href: 'https://www.tse-fr.eu' }],
    projects: ['thesis'],
  },
  {
    id: 'oecd',
    category: 'career',
    org: 'OECD',
    orgNote: 'Economics Department.',
    title: 'Intern, then Consultant',
    location: 'Paris, France',
    start: '2019-03',
    end: '2020-03',
    tags: ['Co-author, OECD Working Paper No. 1626'],
    story: [
      'At the OECD Economics Department in Paris I worked on a question that affects millions of households: why people in some countries move home far more readily than in others.',
      'I did the full statistical analysis and methodology on household microdata from Europe, the US and Australia, co-authored the resulting working paper, and presented the findings to policy stakeholders and OECD country desks.',
    ],
    projects: ['oecd-paper'],
  },
  {
    id: 'erste',
    category: 'career',
    org: 'Erste Group',
    title: 'Data Science Intern',
    location: 'Vienna, Austria',
    start: '2020-05',
    end: '2020-07',
    story: [
      'During my master’s I spent a summer at Erste Group, helping build a production machine-learning pipeline for detecting financial crime.',
      'It was my first close look at what running ML in production really takes: I audited the data quality and defined the indicators used to monitor it.',
    ],
  },
  {
    id: 'wu',
    category: 'education',
    org: 'WU Vienna',
    orgNote: 'Vienna University of Economics and Business.',
    title: 'BSc Economics',
    location: 'Vienna, Austria',
    start: '2015-10',
    end: '2018-11',
    tags: ['Highest honours', 'Ranked 30th, top 1%', 'Dean’s List', 'Merit scholarships 2016–2018'],
    story: [
      'I started out studying technical physics at TU Wien. I loved the maths, but its application felt too abstract for me, and economics offered exactly the combination I was looking for: a statistical and mathematical foundation, applied to real questions.',
      'At WU I graduated with highest honours in the top 1% of my cohort, and my bachelor’s thesis, testing the efficient market hypothesis with neural networks, was my first deep learning project.',
    ],
  },
  {
    id: 'law',
    category: 'education',
    org: 'University of Vienna',
    title: 'Law (Mag. iur.)',
    location: 'Vienna, Austria',
    start: '2015-10',
    status: 'In progress',
    story: [
      'I have been studying law at the University of Vienna alongside economics and, later, my career, and I am still working towards the degree.',
      'The legal training pays off in my day job, where reading and implementing medical-device regulation and the EU AI Act is part of building clinical AI.',
    ],
  },
  {
    id: 'findus',
    category: 'builder',
    org: 'Findus',
    title: 'Co-founder',
    location: 'Vienna, Austria',
    start: '2015-03',
    end: '2018-06',
    story: [
      'At the start of my studies, two friends and I, a very talented programmer and a very talented UI/UX designer, saw something missing in how people discover events and decided to build it ourselves.',
      'With support from the Austrian Economic Chamber (WKO) we launched and saw promising early user growth, but personal reasons and competition led us to wind it down. We had what it took to build the product, not yet the business experience to navigate the market, and it was an incredibly rewarding journey that taught me a lot.',
    ],
    links: [{ label: 'Business plan, 2017 (PDF, German)', href: '/files/findus-businessplan-2017.pdf' }],
  },
  {
    id: 'civil',
    category: 'career',
    org: 'Verein Ute Bock',
    orgNote: 'A Viennese organisation supporting refugees and asylum seekers.',
    title: 'Civilian service',
    location: 'Vienna, Austria',
    start: '2013-10',
    end: '2014-06',
    tags: ['Record €45,000 in donations'],
    story: [
      'I did my civilian service, Austria’s alternative to military service, at Verein Ute Bock, which supports refugees in Vienna. It was the year before the refugee crisis reached Europe, and the work was as demanding as it was meaningful.',
      'I was responsible for event management and fundraising, organising a series of benefit events that raised a record €45,000 in donations, and I helped refugees with legal questions, backed by experts, which meant regular contact with the authorities.',
    ],
  },
  {
    id: 'zeit',
    category: 'career',
    org: 'DIE ZEIT',
    orgNote: 'One of Germany’s most renowned weekly newspapers.',
    title: 'Editorial intern',
    start: '2011',
    end: '2011',
    story: [
      'While still at school, I did an internship at DIE ZEIT, one of Germany’s most renowned weekly newspapers.',
      'Together with Florian Gasser I wrote “Fürs Leben gezeichnet” for the Austria section, a feature on prison tattoos as a forgotten piece of folk culture, published in September 2011 with my name in the byline.',
    ],
    links: [
      {
        label: 'Article: “Fürs Leben gezeichnet” (PDF, German)',
        href: '/files/die-zeit-2011-fuers-leben-gezeichnet.pdf',
      },
    ],
  },
];

export const entryById = (id: string) => entries.find((e) => e.id === id)!;

export const categories: Record<Category, { label: string }> = {
  career: { label: 'Work' },
  education: { label: 'Education' },
  builder: { label: 'Side projects' },
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const fmtMonth = (ym: string) => (ym.length === 4 ? ym : `${MONTHS[Number(ym.slice(5, 7)) - 1]} ${ym.slice(0, 4)}`);
export const fmtRange = (from: string, to?: string, status?: string) =>
  from === to ? fmtMonth(from) : `${fmtMonth(from)} – ${status ?? (to ? fmtMonth(to) : 'present')}`;
