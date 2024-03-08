import styled from 'styled-components';
import Image from 'next/image';

import {
  Flex,
  Text,
  Anchor,
  Box,
  Absolute,
  SVG,
  Button,
} from '@/components/atoms';
import { footer, navigation } from '@/content/global';
import { colors } from '@/constants/styles';
import React, { ReactNode, useState } from 'react';
import { Modal } from '@/components/molecules/Modal/Modal';
import { mediaQueries } from '@/constants/mediaQueries';

const BackgroundWrapper = styled.div`
  position: relative;
  background: linear-gradient(
    277.41deg,
    #194a84 18.51%,
    #174780 35.87%,
    #0f3057 64.93%
  );
`;

const StyledFooter = styled.footer`
  padding-top: 100px;
`;

const MobileFlex = styled(Flex)`
  ${mediaQueries.mobile} {
    padding: 20px;
    font-size: 12px;

    .footer-nav {
      flex-direction: column;
    }
  }
`;

const LeftText = styled(Text)`
  ${mediaQueries.mobile} {
    /*max-width: 50%;*/
  }
`;

const DesktopFlex = styled(Flex)`
  ${mediaQueries.mobile} {
    display: none;
  }
`;

const contact = navigation.find((n) => n.name === 'contact' && !n.isPage);

export const Footer = () => {
  const [modalContent, setModal] = useState<ReactNode | null>(null);

  return (
    <StyledFooter>
      <BackgroundWrapper>
        <Absolute top={'-160px'} zIndex={3} width={'100%'} height={'206px'}>
          <Image
            src={'/images/footer-bg-shapes.png'}
            alt={''}
            fill={true}
            objectFit={'contain'}
          />
        </Absolute>
        <Box width={'100%'} height={'193px'} position={'relative'}>
          <Absolute top={'-38px'} zIndex={2} left={'49.6%'} centered>
            <SVG name={'rocket'} width={45} height={95} />
          </Absolute>
          <Image
            src={'/images/clouds-tp.png'}
            alt={''}
            fill={true}
            objectFit={'cover'}
          />
        </Box>
        <MobileFlex padding={'60px 120px 40px 120px'}>
          <Flex flexDirection={'column'}>
            <Image
              src={`/images/logo.png`}
              alt={'Rocket School'}
              width={242}
              height={48}
            />
            <LeftText
              color={colors.text.white}
              fontSize={'14px'}
              margin={'12px 0 0 0'}
            >
              {footer.about}
            </LeftText>
          </Flex>
          <DesktopFlex whiteSpace={'nowrap'}>
            <nav>
              {navigation
                .filter(({ isPage }) => isPage)
                .map((n) => {
                  return (
                    <Anchor
                      key={n.name}
                      color={colors.text.white}
                      fontSize={'14px'}
                      padding={'0 48px'}
                      fontWeight={700}
                    >
                      {n.name}
                    </Anchor>
                  );
                })}
            </nav>
          </DesktopFlex>
          <DesktopFlex flexDirection={'column'}>
            <Text color={colors.text.white} fontSize={'14px'} fontWeight={700}>
              Looking for something else?
            </Text>
            <Button
              fontSize={'12px'}
              margin={'12px 0 0 0'}
              isLight
              onClick={() =>
                contact?.isPage === false && setModal(contact.contentElem)
              }
            >
              Request Content
            </Button>
          </DesktopFlex>
        </MobileFlex>
        <MobileFlex
          flexDirection={'column'}
          justifyContent={'space-between'}
          padding={'0 120px'}
        >
          <LeftText fontSize={'14px'} color={colors.text.white}>
            {footer.disclaimer}
          </LeftText>
          <Flex padding={'0 0 18px 0'} className={'footer-nav'}>
            <Anchor
              fontSize={'14px'}
              color={colors.text.white}
              margin={'20px 40px 0 0'}
            >
              Privacy Policy
            </Anchor>
            <Anchor
              fontSize={'14px'}
              color={colors.text.white}
              margin={'20px 0 0'}
            >
              Terms of Service
            </Anchor>
          </Flex>
        </MobileFlex>
      </BackgroundWrapper>
      {modalContent && (
        <Modal close={() => setModal(null)}>{modalContent}</Modal>
      )}
    </StyledFooter>
  );
};
