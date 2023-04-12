import { Header } from '@/components/organisms/Header/Header';
import { Contributors } from '@/components/molecules/Contributors/Contributors';
import { contributors } from '@/content/contributors';
import { Cards } from '@/components/organisms/HomePageCards/Cards';
import { Hero } from '@/components/organisms/Hero/Hero';
import { HeroSection } from '@/components/templates/HomePage/HomePage.styles';
import { LazyVideo, Flex, H2, Text, Button, Section } from '@/components/atoms';
import { colors } from '@/constants/styles';
import { Footer } from '@/components/organisms/Footer/Footer';
import { videoUrl } from '@/content/homePage';
import Image from 'next/image';

export const HomePage = () => {
  return (
    <div>
      <main>
        <HeroSection
          backgroundImage={'url(/images/heroBG.png)'}
          backgroundSize={'cover'}
        >
          <Header />
          <Hero />
        </HeroSection>
      </main>
      <Flex flexDirection={'column'} alignItems={'center'}>
        <LazyVideo src={videoUrl} width={'45%'} height={'440px'} />
        <H2
          fontWeight={700}
          fontSize={'46px'}
          margin={'52px 0 0 0'}
          textAlign={'center'}
        >
          <Text>Migrate from Solo Staking To</Text>
          <Text color={colors.text.orange}>Rocket Pool</Text>
          <Button>Get started</Button>
        </H2>
      </Flex>
      <Section padding={'55px 100px'}>
        <Cards />
      </Section>
      <Section
        padding={'70px 0 0 100px'}
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
