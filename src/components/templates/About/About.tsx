import { Flex, H2, Text, Button, Section, SVG } from '@/components/atoms';
import { Footer } from '@/components/organisms/Footer/Footer';
import {
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
} from '@/content/aboutPage';
import Image from 'next/image';
import { ColorHeading } from '@/components/molecules/ColorHeading/ColorHeading';
import { Main } from '@/components/templates/About/About.styles';
import { CardGrid } from '@/components/organisms/CardGrid/CardGrid';
import { SecondaryHeader } from '@/components/organisms/Header/SecondaryHeader';

export const About = () => {
  return (
    <div>
      <SecondaryHeader title={primaryHeading} />
      <Main>
        <Section
          display={'flex'}
          padding={'0 0 129px 0'}
          justifyContent={'space-between'}
        >
          <Flex
            flexDirection={'column'}
            alignItems={'flex-start'}
            width={'577px'}
          >
            <h2>
              <ColorHeading fontSize={'48px'} lines={firstHeading} />
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
              margin={'37px 0 0 0'}
              alignSelf={'center'}
              href={firstVideoLink}
            >
              Watch Video Series
            </Button>
          </Flex>
          <Image
            src={firstImage}
            alt={'ETH Staking'}
            width={406}
            height={406}
          />
        </Section>

        <Section
          display={'flex'}
          justifyContent={'space-between'}
          padding={'0 0 118px 0'}
        >
          <Image
            src={secondImage}
            alt={'ETH Staking'}
            width={406}
            height={406}
          />

          <Flex flexDirection={'column'} alignItems={'flex-start'}>
            <H2 margin={'0 0 46px'}>
              <ColorHeading fontSize={'48px'} lines={secondHeading} />
            </H2>
            <CardGrid gridCards={firstGrid} />
            <Button
              as={'a'}
              margin={'37px 0 0 0'}
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
              <ColorHeading fontSize={'48px'} lines={thirdHeading} />
            </H2>
            <CardGrid gridCards={secondGrid} />
            <Button
              as={'a'}
              margin={'37px 0 0 0'}
              alignSelf={'center'}
              href={thirdVideoLink}
            >
              Watch Video Series
            </Button>
          </Flex>

          <Image
            src={thirdImage}
            alt={'ETH Staking'}
            width={406}
            height={406}
          />
        </Section>
      </Main>

      <Footer />
    </div>
  );
};
