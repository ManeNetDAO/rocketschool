import { Header } from '@/components/organisms/Header/Header';
import { Contributors } from '@/components/molecules/Contributors/Contributors';
import { contributors } from '@/content/contributors';
import { Cards } from '@/components/organisms/HomePageCards/Cards';
import { Hero } from '@/components/organisms/Hero/Hero';
import {
  LazyVideo,
  Flex,
  H2,
  Text,
  Button,
  Section,
  Desktop,
} from '@/components/atoms';
import { colors } from '@/constants/styles';
import { Footer } from '@/components/organisms/Footer/Footer';
import { videoUrl } from '@/content/homePage';
import Image from 'next/image';
import { AnimatedImage } from '@/components/molecules/AnimatedImage/AnimatedImage';

export const HomePage = () => {
  return (
    <div>
      <main>
        <Section
          backgroundImage={'url(/images/home-hero.jpeg)'}
          backgroundSize={'cover'}
          height={'851px'}
          padding={'20px 100px'}
          mobilePadding={'20px 30px'}
        >
          <Desktop>
            <AnimatedImage src={'images/hero_shapes.png'} height={'300px'} />
          </Desktop>
          <Header />
          <Hero />
        </Section>
      </main>
      <Flex flexDirection={'column'} alignItems={'center'}>
        <LazyVideo
          src={videoUrl}
          width={'45%'}
          height={'440px'}
          mobileWidth={'90%'}
        />
        {/*
        <H2
          fontWeight={700}
          fontSize={'46px'}
          margin={'52px 0 0 0'}
          textAlign={'center'}
        >
          <Text mobileSize={'32px'}>Migrate from Solo Staking To</Text>
          <Text color={colors.text.orange} mobileSize={'32px'}>
            Rocket Pool
          </Text>
          <Button>Get started</Button>
        </H2>
      */}
      </Flex>
      <Section padding={'55px 100px'} mobilePadding={'25px 0 25px 25px'}>
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
          height={893}
          style={{ position: 'relative', bottom: '150px' }}
        />
      </Section>
      <Footer />
    </div>
  );
};
