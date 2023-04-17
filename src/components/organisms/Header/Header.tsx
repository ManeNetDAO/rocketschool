import React from 'react';
import { Navigation } from '@/components/molecules/Navigation/Navigation';
import { Flex, Anchor } from '@/components/atoms';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <Flex justifyContent={'space-between'}>
        <Anchor href={'/'}>
          <Image
            src={`/images/logo.png`}
            alt={'Rocket School'}
            width={248}
            height={48}
          />
        </Anchor>
        <Navigation />
      </Flex>
    </header>
  );
};
