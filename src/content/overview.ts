import { Line } from '@/components/molecules/ColorHeading/ColorHeading';
import { GridCards } from '@/components/organisms/CardGrid/CardGrid';

export const primaryHeading = 'Rocket School Overview';

export const firstHeading: Array<Line> = [
  [
    { text: 'Learn About\u00A0', color: 'black' },
    { text: 'Ethereum Staking', color: 'orange' },
  ],
];

export const secondHeading: Array<Line> = [
  [
    { text: 'Learn About Node\u00A0', color: 'black' },
    { text: 'Operation', color: 'orange' },
  ],
];

export const thirdHeading: Array<Line> = [
  [
    { text: 'Learn About Node\u00A0', color: 'black' },
    { text: 'Maintenance', color: 'orange' },
  ],
];

export const paragraph =
  'In this series, we’ll explore how Ethereum staking works, how to increase your staking rewards and network decentralization by using Rocket Pool, what it takes to become a node operator, and how to securely set up and maintain your own node and how to make the most of community tools to maintain and monitor your node!';

export const firstVideoLink = '/ethereum-staking';
export const secondVideoLink = '/run-your-own-node';
export const thirdVideoLink = '/maintain-your-node';

export const firstGrid: GridCards = [
  {
    name: 'Should You Run a Node?',
    about:
      'Understand what it means to be a Rocket Pool node operator — the responsibilities, hardware requirements, gas costs, and potential rewards.',
  },
  {
    name: 'Set Up Your Node Securely',
    about:
      'Follow step-by-step lessons to prepare your node: install Ubuntu, set up SSH, secure your firewall, and enable auto-updates.',
  },
  {
    name: 'Install Rocket Pool Software',
    about:
      'Install the Rocket Pool CLI and Smartnode Stack. Learn how to configure your setup, connect clients, and get syncing.',
  },
  {
    name: 'Launch Your Minipool',
    about:
      'From testnet decisions to wallet setup and finally staking — walk through every step to launch your very own minipool.',
  },
];

export const secondGrid: GridCards = [
  {
    name: 'Track and Claim Your Rewards',
    about:
      'Learn how to claim execution, consensus, and RPL rewards — and understand what to look for when skimming.',
  },
  {
    name: 'Keep Your Node Updated and Online',
    about:
      'Master the essentials of node maintenance, from software updates to monitoring using Grafana and terminal tools.',
  },
  {
    name: 'Use Community Tools',
    about:
      ' Explore powerful tools created by the Rocket Pool community to make node operation easier and more efficient.',
  },
  {
    name: 'Stay Secure, Stay Staked',
    about:
      'Keep your node healthy, your ETH earning, and your setup resilient with best practices from experienced operators.',
  },
];

export const firstImage = '/images/eth-staking-graphic.png';
export const secondImage = '/images/rocket-pool-graphic.png';
export const thirdImage = '/images/eth-staking-graphic.png';

export const checks = [
  'Understand Ethereum’s Proof-of-Stake System',
  'Explore Staking with Rocket Pool',
  'Maintain Your Bode and Track Your Rewards',
];
