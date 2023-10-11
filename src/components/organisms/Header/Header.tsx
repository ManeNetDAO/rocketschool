import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Navigation } from '@/components/molecules/Navigation/Navigation';
import { MobileNav } from '@/components/molecules/Navigation/MobileNav';

import { Flex, Anchor } from '@/components/atoms';
import { mediaQueries } from '@/constants/mediaQueries';
import { Modal } from '@/components/molecules/Modal/Modal';

const StyledHeader = styled.header<{ padding?: string }>`
  ${({ padding }) => padding && `padding: ${padding};`}

  ${mediaQueries.mobile} {
    .logo-wrapper {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .logo-container {
    position: relative;
    width: 217px;
    height: 42px;
  }

  ${mediaQueries.desktop} {
    .logo-container {
      width: 248px;
      height: 48px;
      margin-left: 20px !important;
    }
  }
`;

export const Header = ({
  children,
  padding,
}: {
  children?: ReactNode;
  padding?: string;
}) => {
  const [modalContent, setModal] = useState<ReactNode | null>(null);

  return (
    <StyledHeader padding={padding}>
      <Flex justifyContent={'space-between'}>
        <Anchor href={'/'} className={'logo-wrapper'}>
          <div className={'logo-container'}>
            <Image
              className={'logo-container'}
              src={`/images/logo.png`}
              alt={'Rocket School'}
              fill
            />
          </div>
        </Anchor>
        <MobileNav setModal={setModal} />
        <Navigation />
      </Flex>
      {modalContent && (
        <Modal close={() => setModal(null)}>{modalContent}</Modal>
      )}
      {children && children}
    </StyledHeader>
  );
};
