import { Navigation } from '@/components/molecules/Navigation/Navigation';
import { Flex, Section, H1, Anchor } from '@/components/atoms';
import Image from 'next/image';
import { colors } from '@/constants/styles';

export const SecondaryHeader = ({ title }: { title: string }) => {
  return (
    <Section
      backgroundImage={'url(/images/interior-hero.jpeg)'}
      backgroundSize={'cover'}
      height={'346px'}
      padding={'20px 100px 0 100px'}
    >
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
        <H1
          color={colors.text.white}
          fontSize={'46px'}
          fontWeight={700}
          textAlign={'center'}
          padding={'86px 0 0 0'}
        >
          {title}
        </H1>
      </header>
    </Section>
  );
};
