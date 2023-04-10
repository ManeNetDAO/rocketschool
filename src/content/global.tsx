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
    <Anchor href={outsideLinks.discord}>discord</Anchor>
    <Text display={'inline'}>.</Text>
  </div>
);

export const navigation: Array<NavigationElem> = [
  { name: 'learn about ethereum', isPage: true, link: '' },
  { name: 'run your own node', isPage: true, link: '' },
  { name: 'maintain your own node', isPage: true, link: '' },
  { name: 'contact', isPage: false, contentElem: contactContentElem },
];
