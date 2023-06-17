import React, { ReactNode } from 'react';
import { Text, Anchor } from '@/components/atoms';

export const outsideLinks = {
  discord: 'https://discord.gg/EVMavericks',
};

type NavigationElem = {
  name: string;
} & (
  | { isPage: true; link: string }
  | { isPage: false; contentElem: ReactNode }
);

const contactContentElem = (
  <div>
    <Text display={'inline'}>
      Contact us at the #public-rocket-school channel of our{' '}
    </Text>
    <Anchor textDecoration={'underline'} href={outsideLinks.discord}>
      discord
    </Anchor>
    <Text display={'inline'}>.</Text>
  </div>
);

export const navigation: Array<NavigationElem> = [
  { name: 'overview', isPage: true, link: '/overview' },
  { name: 'ethereum staking', isPage: true, link: '/ethereum-staking' },
  { name: 'run your own node', isPage: true, link: '/run-your-own-node' },
  { name: 'maintain your node', isPage: true, link: '/maintain-your-node' },
  { name: 'contact', isPage: false, contentElem: contactContentElem },
];

export const footer = {
  about:
    'Rocket School is an open-source learning platform that teaches users about Ethereum, staking, running a node, and the Rocket Pool protocol.',
  disclaimer:
    'This project is backed by the EVMavericks community and is not affiliated with Rocket Pool.',
};
