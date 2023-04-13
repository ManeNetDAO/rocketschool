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

const BackgroundWrapper = styled.div`
  background: linear-gradient(
    277.41deg,
    #194a84 18.51%,
    #174780 35.87%,
    #0f3057 64.93%
  );
`;

const StyledFooter = styled.footer`
  padding-top: 95px;
`;

export const Footer = () => {
  const [modalContent, setModal] = useState<ReactNode | null>(null);

  return (
    <StyledFooter>
      <BackgroundWrapper>
        <Box width={'100%'} height={'193px'} position={'relative'}>
          <Absolute top={'-40px'} zIndex={2} left={'49.6%'} centered>
            <SVG name={'rocket'} width={45} height={95} />
          </Absolute>
          <Image
            src={'/images/clouds-tp.png'}
            alt={''}
            fill={true}
            objectFit={'cover'}
          />
        </Box>
        <Flex padding={'60px 120px 40px 120px'}>
          <Flex flexDirection={'column'}>
            <Image
              src={`/images/logo.png`}
              alt={'Rocket School'}
              width={242}
              height={48}
            />
            <Text
              color={colors.text.white}
              fontSize={'14px'}
              margin={'12px 0 0 0'}
            >
              {footer.about}
            </Text>
          </Flex>
          <Flex whiteSpace={'nowrap'}>
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
          </Flex>
          <Flex flexDirection={'column'}>
            <Text color={colors.text.white} fontSize={'14px'} fontWeight={700}>
              Looking for something else?
            </Text>
            <Button
              fontSize={'12px'}
              margin={'12px 0 0 0'}
              isLight
              onClick={() =>
                setModal(!navigation[3].isPage && navigation[3].contentElem)
              }
            >
              Request Content
            </Button>
          </Flex>
        </Flex>
        <Flex justifyContent={'space-between'} padding={'0 120px'}>
          <Text fontSize={'14px'} color={colors.text.white}>
            {footer.disclaimer}
          </Text>
          <Flex padding={'0 0 18px 0'}>
            <Anchor
              fontSize={'14px'}
              color={colors.text.white}
              margin={'0 40px 0 0'}
            >
              Privacy Policy
            </Anchor>
            <Anchor fontSize={'14px'} color={colors.text.white}>
              Terms of Service
            </Anchor>
          </Flex>
        </Flex>
      </BackgroundWrapper>
      {modalContent && (
        <Modal close={() => setModal(null)}>{modalContent}</Modal>
      )}
    </StyledFooter>
  );
};
