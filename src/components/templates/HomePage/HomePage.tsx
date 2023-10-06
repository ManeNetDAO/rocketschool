import { Header } from '@/components/organisms/Header/Header';
import { Contributors } from '@/components/molecules/Contributors/Contributors';
import { contributors } from '@/content/contributors';
import { Cards } from '@/components/organisms/HomePageCards/Cards';
import { Hero } from '@/components/organisms/Hero/Hero';
import {
  LazyVideo,
  Flex,
  Section,
  Desktop,
  Box,
  Absolute,
} from '@/components/atoms';
import { Footer } from '@/components/organisms/Footer/Footer';
import { videoUrl } from '@/content/homePage';
import Image from 'next/image';
import { AnimatedImage } from '@/components/molecules/AnimatedImage/AnimatedImage';
import { mediaQueries } from '@/constants/mediaQueries';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-image: url(/images/home-hero.jpeg);
  position: relative;
  background-size: cover;
  ${mediaQueries.desktop} {
    height: 851px;
  }
  ${mediaQueries.mobile} {
    height: 630px;
  }
`;

export const HomePage = () => {
  return (
    <div>
      <main>
        <HeaderWrapper>
          <Absolute zIndex={-1} width={'100%'} height={'100%'}>
            <Desktop>
              <Image src={'/images/home-hero.jpeg'} alt={''} fill={true} />
            </Desktop>
          </Absolute>
          <Desktop>
            <AnimatedImage src={'images/hero_shapes.png'} height={'300px'} />
          </Desktop>
          <Box padding={'20px 100px'} mobilePadding={'20px 30px'}>
            <Header padding={'0 0 0 50px'} />
            <Hero />
          </Box>
        </HeaderWrapper>
      </main>
      <Flex flexDirection={'column'} alignItems={'center'}>
        <LazyVideo
          src={videoUrl}
          width={'45%'}
          height={'100%'}
          mobileWidth={'90%'}
        />
      </Flex>
      <Section padding={'55px 100px'} mobilePadding={'25px'}>
        <Cards />
      </Section>
      <Section
        padding={'70px 0 0 100px'}
        mobilePadding={'70px 0 0 15px'}
        display={'flex'}
        justifyContent={'space-between'}
      >
        <Contributors contributors={contributors} />
        <Image
          src={'/images/rightRocketCol.png'}
          alt={''}
          width={600}
          height={750}
          style={{ position: 'relative', bottom: '150px' }}
        />
      </Section>
      <Footer />
    </div>
  );
};
