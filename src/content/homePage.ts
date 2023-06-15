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
    title: 'Learn about Ethereum Staking',
    about:
      'Learn about the Ethereum and Rocket Pool staking basics.',
    pointer: { text: 'Watch our Video Lessons', link: '/ethereum-staking' },
  },
  {
    svg: 'nodes' as const,
    title: 'Run Your Own Node',
    about:
      'Learn how to set up a Rocket Pool node and minipool',
    pointer: { text: 'Watch our Video Lessons', link: '/run-your-own-node' },
  },
  {
    svg: 'wrench' as const,
    title: 'Maintain Your Node',
    about:
      'Learn how to claim rewards and monitor and maintain your Rocket Pool node.',
    pointer: { text: 'Watch our Video Lessons', link: '/maintain-your-node' },
  },
];

export const videoUrl = 'https://www.youtube.com/embed/aAs8YuGQg18';
