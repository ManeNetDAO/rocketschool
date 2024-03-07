import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { getRandomInRange } from '@/utils/random';
import { Box, Text, Anchor, H2 } from '@/components/atoms';
import { ColorHeading } from '@/components/molecules/ColorHeading/ColorHeading';
import { contributorsHeading } from '@/content/homePage';
import { mediaQueries } from '@/constants/mediaQueries';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid #fccfbc;
  width: calc(100vw - 30px);
  min-width: 320px;
  max-width: 420px;
  border-radius: 17px;
`;

const Contributor = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  padding: 24px;
  position: relative;
  ${({ isSelected }) =>
    isSelected &&
    `right: 70px;
           background: linear-gradient(277.41deg, #FF5C00 18.51%, #FF7700 35.87%, #FF8C39 64.93%);
           border-radius: 14.5822px;
           width: calc(100% + 70px);
           padding-right: 94px;
           
   ${mediaQueries.mobile} {
     padding-right: 24px; //ensuring the 94px above only applies to desktop
     right: 0px;
     width: 100%;
  }
          `}
  ${mediaQueries.mobile} {
    padding: 16px;
    img {
      height: 50px;
      width: 50px;
    }
  }
`;

type Props = {
  contributors: Array<{
    name: string;
    text: string;
    image: string;
    link?: string;
  }>;
};

export const AboutText = styled(Text)`
  ${mediaQueries.mobile} {
    width: 240px;
  }
`;

export const Contributors = ({ contributors }: Props) => {
  const [selectedIndex, setSelected] = useState(0);
  useEffect(() => {
    setSelected(getRandomInRange(contributors.length));
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <H2 margin={'0 0 40px 0'}>
        <ColorHeading
          fontSize={'45px'}
          mobileSize={'28px'}
          lines={contributorsHeading}
        />
      </H2>
      <Wrapper>
        {contributors.map(({ name, image, text, link }, index) => {
          return (
            <Contributor
              key={name}
              isSelected={selectedIndex === index}
              onMouseOver={() => setSelected(index)}
            >
              <Image
                src={`/images/${image}`}
                alt={name}
                width={70}
                height={70}
                style={{ borderRadius: '50%' }}
              />
              <Box margin={'0 0 0 16px'} width={'420px'} mobileWidth={'100vw'}>
                {link ? (
                  <Anchor
                    href={link}
                    fontSize={'22px'}
                    fontWeight={500}
                    color={selectedIndex === index ? '#FFFFFF' : ''}
                  >
                    {name}
                  </Anchor>
                ) : (
                  <Text
                    fontSize={'22px'}
                    fontWeight={500}
                    color={selectedIndex === index ? '#FFFFFF' : undefined}
                  >
                    {name}
                  </Text>
                )}
                <AboutText
                  fontSize={'13px'}
                  fontWeight={400}
                  color={selectedIndex === index ? '#FFFFFF' : ''}
                  margin={'5px 0 0 0'}
                  width={'100%'}
                >
                  {text}
                </AboutText>
              </Box>
            </Contributor>
          );
        })}
      </Wrapper>
    </div>
  );
};
