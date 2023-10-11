import {
  Flex,
  H2,
  Text,
  Button,
  Section,
  SVG,
  Desktop,
} from '@/components/atoms';
import { Footer } from '@/components/organisms/Footer/Footer';
import Image from 'next/image';
import {
  ColorHeading,
  Line,
} from '@/components/molecules/ColorHeading/ColorHeading';
import { Main } from '@/components/templates/About/About.styles';
import { CardGrid, GridCards } from '@/components/organisms/CardGrid/CardGrid';
import { SecondaryHeader } from '@/components/organisms/Header/SecondaryHeader';

type Props = {
  primaryHeading: string;
  firstHeading: Array<Line>;
  secondHeading: Array<Line>;
  thirdHeading: Array<Line>;
  checks: Array<string>;
  paragraph: string;
  firstImage: string;
  firstGrid: GridCards;
  secondGrid: GridCards;
  secondImage: string;
  thirdImage: string;
  firstVideoLink: string;
  secondVideoLink: string;
  thirdVideoLink: string;
};

export const About = (x: Props) => {
  const {
    primaryHeading,
    firstHeading,
    secondHeading,
    thirdHeading,
    checks,
    paragraph,
    firstImage,
    firstGrid,
    secondGrid,
    secondImage,
    thirdImage,
    firstVideoLink,
    secondVideoLink,
    thirdVideoLink,
  } = x;
  return (
    <div>
      <SecondaryHeader title={primaryHeading} />
      <Main>
        <Section
          display={'flex'}
          padding={'0 0 50px 0'}
          justifyContent={'space-between'}
        >
          <Flex
            flexDirection={'column'}
            alignItems={'flex-start'}
            className={'learn-ethereum'}
          >
            <h2>
              <ColorHeading
                fontSize={'48px'}
                lines={firstHeading}
                mobileSize={'31px'}
              />
            </h2>
            <Text
              fontSize={'14px'}
              lineHeight={'29px'}
              margin={'12px 0 17px 0'}
            >
              {paragraph}
            </Text>
            {checks.map((t) => (
              <Flex margin={'10px 0 0 0'} alignItems={'center'} key={t}>
                <SVG
                  name={'check'}
                  width={21}
                  height={21}
                  margin={'0 21px 0 0'}
                />
                <Text fontWeight={600}>{t}</Text>
              </Flex>
            ))}
            <Button
              as={'a'}
              margin={'40px 0 0 0'}
              alignSelf={'center'}
              href={firstVideoLink}
            >
              Watch Video Series
            </Button>
          </Flex>
          <Desktop>
            <Image
              src={firstImage}
              alt={'ETH Staking'}
              width={406}
              height={406}
            />
          </Desktop>
        </Section>

        <Section
          display={'flex'}
          justifyContent={'space-between'}
          padding={'0 0 118px 0'}
        >
          <Desktop>
            <Image
              src={secondImage}
              alt={'ETH Staking'}
              width={406}
              height={406}
            />
          </Desktop>
          <Flex flexDirection={'column'} alignItems={'flex-start'}>
            <H2 margin={'0 0 46px'}>
              <ColorHeading
                fontSize={'48px'}
                lines={secondHeading}
                mobileSize={'31px'}
              />
            </H2>
            <CardGrid gridCards={firstGrid} />
            <Button
              as={'a'}
              margin={'40px 0 0 0'}
              alignSelf={'center'}
              href={secondVideoLink}
            >
              Watch Video Series
            </Button>
          </Flex>
        </Section>

        <Section display={'flex'} justifyContent={'space-between'}>
          <Flex flexDirection={'column'} alignItems={'flex-start'}>
            <H2 margin={'0 0 46px'}>
              <ColorHeading
                fontSize={'48px'}
                lines={thirdHeading}
                mobileSize={'31px'}
              />
            </H2>
            <CardGrid gridCards={secondGrid} />
            <Button
              as={'a'}
              margin={'40px 0 0 0'}
              alignSelf={'center'}
              href={thirdVideoLink}
            >
              Watch Video Series
            </Button>
          </Flex>
          <Desktop>
            <Image
              src={thirdImage}
              alt={'ETH Staking'}
              width={406}
              height={406}
            />
          </Desktop>
        </Section>
      </Main>

      <Footer />
    </div>
  );
};
