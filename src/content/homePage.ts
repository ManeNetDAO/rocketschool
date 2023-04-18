import { Line } from '@/components/molecules/ColorHeading/ColorHeading';

export const heroLines: Array<Line> = [
  [
    { text: `Learn\u00A0`, color: 'orange' },
    { text: 'how to run', color: 'black' },
  ],
  [{ text: 'a node from home', color: 'black' }],
];

export const contributorsHeading: Array<Line> = [
  [
    { text: 'The\u00A0', color: 'black' },
    { text: 'Rocket School\u00A0', color: 'orange' },
    { text: 'Crew', color: 'black' },
  ],
];

export const homePageCards = [
  {
    svg: 'ethereum' as const,
    title: 'Learn about Ethereum',
    about:
      'Learn about Ethereum, Rocket Pool, running a node, maintaining a node. We will guide you through the technical',
    pointer: { text: 'Watch our Guides', link: '/ethereum' },
  },
  {
    svg: 'nodes' as const,
    title: 'Run your own node',
    about:
      'Learn about Ethereum, Rocket Pool, running a node, maintaining a node. We will guide you through the technical',
    pointer: { text: 'Watch our Guides', link: '/nodes' },
  },
  {
    svg: 'wrench' as const,
    title: 'Maintain your own node',
    about:
      'Learn about Ethereum, Rocket Pool, running a node, maintaining a node. We will guide you through the technical',
    pointer: { text: 'Watch our Guides', link: '/wrench' },
  },
];

export const videoUrl = 'https://www.youtube.com/embed/aAs8YuGQg18';
