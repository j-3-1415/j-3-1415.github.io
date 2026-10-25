// The condensed path: one row per phase, newest first. Parallel things share a row,
// and every branch converges into the current role. Side projects run alongside.
//
// Each row draws its own slice of the graph in a 0–100 tall box that stretches with
// the row: y=0 is the row's top edge, 50 its centre (where nodes sit), 100 its bottom.

import type { Category } from './timeline';

export type Lane = 'law' | 'edu' | 'main' | 'branch' | 'side';
type Y = 0 | 50 | 100;

export const GRAPH_W = 132;

export const lanes: Record<Lane, { x: number; cat: Category }> = {
  law: { x: 24, cat: 'education' },
  edu: { x: 48, cat: 'education' },
  main: { x: 72, cat: 'career' },
  branch: { x: 96, cat: 'career' },
  side: { x: 120, cat: 'builder' },
};

export interface Segment {
  from: [Lane, Y];
  to: [Lane, Y];
  cat?: Category; // defaults to the colour of the `from` lane
  dashed?: boolean;
}

export type Column = 'work' | 'edu' | 'side';

export const columns: { id: Column; label: string; cat: Category }[] = [
  { id: 'work', label: 'Work', cat: 'career' },
  { id: 'edu', label: 'Education', cat: 'education' },
  { id: 'side', label: 'Side projects', cat: 'builder' },
];

export interface Item {
  entry: string; // id in data/timeline.ts
  title: string;
  meta: string;
  lane: Lane;
  col: Column;
  span?: number; // rows this entry covers, counting down from its own row
  colSpan?: number; // columns it covers, rightwards from `col` (fills empty ones)
  join?: 'up' | 'down' | 'up down'; // accent bar continues into the row above/below
  inProgress?: boolean; // dashed accent bar
  nodeY?: 50 | 100; // 100 puts the node on the row's bottom edge, centred on a 2-row span
  when?: string; // shown when it differs from the row's range
  badge?: string;
  head?: boolean;
}

export interface Row {
  when: string;
  items: Item[];
  segments: Segment[];
}

// Helpers for the common shapes.
const through = (lane: Lane, dashed = false): Segment => ({ from: [lane, 100], to: [lane, 0], dashed });
const into = (lane: Lane): Segment => ({ from: [lane, 100], to: [lane, 50] });
const outOf = (lane: Lane, dashed = false): Segment => ({ from: [lane, 50], to: [lane, 0], dashed });

export const rows: Row[] = [
  {
    when: '2026 – now',
    items: [
      { entry: 'retinsight-head', title: 'Head of AI Development', meta: 'RetInSight | Topcon Healthcare', lane: 'main', col: 'work', colSpan: 2, join: 'down', head: true, badge: 'Team of 5' },
      { entry: 'up', title: 'Up!', meta: 'Social app | iOS & Android', lane: 'side', col: 'side', badge: '~200 users' },
    ],
    segments: [into('main'), { from: ['law', 100], to: ['main', 50], dashed: true }, into('side')],
  },
  {
    when: '2025 – 2026',
    items: [
      { entry: 'retinsight-lead', title: 'AI Development Lead', meta: 'RetInSight', lane: 'main', col: 'work', colSpan: 2, join: 'up down', badge: 'ARVO 2025 & 2026' },
    ],
    segments: [into('main'), outOf('main'), through('law', true), through('side')],
  },
  {
    when: '2022 – 2025',
    items: [
      { entry: 'retinsight-dl', title: 'Deep Learning Engineer', meta: 'RetInSight', lane: 'main', col: 'work', colSpan: 2, join: 'up', badge: 'ARVO 2024' },
    ],
    segments: [
      into('main'),
      outOf('main'),
      { from: ['edu', 100], to: ['main', 50] },
      through('law', true),
      through('side'),
    ],
  },
  {
    when: '2020 – 2021',
    items: [
      { entry: 'uzh', title: 'Research Assistant', meta: 'University of Zurich', lane: 'main', col: 'work' },
      { entry: 'tse', title: 'MSc Econometrics', meta: 'Toulouse School of Economics', lane: 'edu', col: 'edu', span: 2, nodeY: 100, when: '2019 – 2021', badge: 'Valedictorian' },
      { entry: 'challenge', title: 'Data Science Challenge', meta: 'Capgemini & Microsoft', lane: 'side', col: 'side', when: '2021', badge: '1st for performance' },
    ],
    segments: [
      into('main'),
      outOf('main'),
      through('edu'),
      into('side'),
      outOf('side'),
      through('law', true),
    ],
  },
  {
    when: '2019 – 2020',
    items: [
      { entry: 'oecd', title: 'Intern → Consultant', meta: 'OECD, Paris', lane: 'main', col: 'work', badge: 'Published paper' },
      { entry: 'erste', title: 'Data Science Intern', meta: 'Erste Group', lane: 'branch', col: 'work', when: '2020' },
    ],
    segments: [
      { from: ['edu', 100], to: ['main', 50], cat: 'career' },
      outOf('main'),
      { from: ['branch', 50], to: ['main', 0] },
      through('edu'),
      through('law', true),
      through('side'),
    ],
  },
  {
    when: '2015 – 2018',
    items: [
      { entry: 'wu', title: 'BSc Economics', meta: 'WU Vienna', lane: 'edu', col: 'edu', badge: 'Top 1%' },
      { entry: 'law', title: 'Law', meta: 'University of Vienna', lane: 'law', col: 'edu', inProgress: true, when: 'since 2015 | in progress' },
      { entry: 'findus', title: 'Co-founder', meta: 'Findus | event app', lane: 'side', col: 'side' },
    ],
    segments: [{ from: ['main', 100], to: ['edu', 50] }, outOf('edu'), outOf('law', true), outOf('side')],
  },
  {
    when: '2013 – 2014',
    items: [
      { entry: 'civil', title: 'Civilian service', meta: 'Verein Ute Bock | refugee support', lane: 'main', col: 'work', badge: '€45k raised' },
    ],
    segments: [into('main'), outOf('main')],
  },
  {
    when: '2011',
    items: [
      { entry: 'zeit', title: 'Editorial intern', meta: 'DIE ZEIT', lane: 'main', col: 'work', when: 'during school', badge: 'Co-authored article' },
    ],
    segments: [outOf('main')],
  },
];

// The terminal replays the path as git commands; each step lights up one item.
export const script: { cmd: string; entry?: string }[] = [
  { cmd: 'git init career' },
  { cmd: 'git commit -m "Editorial internship at DIE ZEIT"', entry: 'zeit' },
  { cmd: 'git commit -m "Civilian service: refugee support"', entry: 'civil' },
  { cmd: 'git checkout -b education', entry: 'wu' },
  { cmd: 'git commit -m "BSc Economics, WU Vienna (top 1%)"', entry: 'wu' },
  { cmd: 'git branch law  # still open', entry: 'law' },
  { cmd: 'git checkout -b side-projects && git commit -m "Co-found Findus"', entry: 'findus' },
  { cmd: 'git checkout -b work && git commit -m "OECD working paper"', entry: 'oecd' },
  { cmd: 'git commit -m "Data science intern, Erste Group"', entry: 'erste' },
  { cmd: 'git checkout education && git commit -m "MSc, TSE: valedictorian"', entry: 'tse' },
  { cmd: 'git checkout work && git commit -m "Research assistant, UZH"', entry: 'uzh' },
  { cmd: 'git checkout side-projects && git commit -m "Data science challenge, as a team of two"', entry: 'challenge' },
  { cmd: 'git checkout work && git merge education -m "Join RetInSight"', entry: 'retinsight-dl' },
  { cmd: 'git commit -m "AI Development Lead"', entry: 'retinsight-lead' },
  { cmd: 'git tag arvo-2026', entry: 'retinsight-lead' },
  { cmd: 'git commit -m "Head of AI Development"', entry: 'retinsight-head' },
  { cmd: 'git checkout side-projects && git commit -m "Ship Up!"', entry: 'up' },
  { cmd: 'git log --oneline -1  # HEAD → Head of AI Development', entry: 'retinsight-head' },
];

// Builds the SVG path for a segment: straight when it stays in its lane,
// otherwise an S-curve with vertical tangents at both ends.
export function segmentPath(s: Segment): string {
  const x1 = lanes[s.from[0]].x;
  const y1 = s.from[1];
  const x2 = lanes[s.to[0]].x;
  const y2 = s.to[1];
  if (x1 === x2) return `M${x1},${y1} L${x2},${y2}`;
  const my = (y1 + y2) / 2;
  return `M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`;
}
