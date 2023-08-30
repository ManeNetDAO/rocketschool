import {
  Section,
  H1,
  Absolute,
  Box,
  Desktop,
  Mobile,
} from '@/components/atoms';
import { colors } from '@/constants/styles';
import { Header } from '@/components/organisms/Header/Header';
import Image from 'next/image';

export const SecondaryHeader = ({ title }: { title: string }) => {
  return (
    <Section width={'100%'} position={'relative'}>
      <Absolute zIndex={-1} width={'100%'} height={'100%'}>
        <Desktop>
          <Image src={'/images/interior-hero.jpeg'} alt={''} fill={true} />
        </Desktop>
        <Mobile>
          <Image
            src={'/images/interior-hero.jpeg'}
            alt={''}
            fill={true}
            objectFit={'cover'}
          />
        </Mobile>
      </Absolute>
      <Box padding={'20px 100px 100px 100px'}>
        <Header>
          <H1
            color={colors.text.white}
            fontSize={'46px'}
            mobileSize={'32px'}
            fontWeight={700}
            textAlign={'center'}
            padding={'30px 0 0 0'}
          >
            {title}
          </H1>
        </Header>
      </Box>
    </Section>
  );
};
