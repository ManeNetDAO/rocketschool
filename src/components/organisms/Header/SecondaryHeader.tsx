import { Section, H1 } from '@/components/atoms';
import { colors } from '@/constants/styles';
import { Header } from '@/components/organisms/Header/Header';

export const SecondaryHeader = ({ title }: { title: string }) => {
  return (
    <Section
      backgroundImage={'url(/images/interior-hero.jpeg)'}
      backgroundSize={'cover'}
      height={'346px'}
      padding={'20px 100px 0 100px'}
    >
      <Header>
        <H1
          color={colors.text.white}
          fontSize={'46px'}
          fontWeight={700}
          textAlign={'center'}
          padding={'86px 0 0 0'}
        >
          {title}
        </H1>
      </Header>
    </Section>
  );
};
