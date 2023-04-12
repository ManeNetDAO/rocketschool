import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { getRandomInRange } from '@/utils/random';
import { Box, Text, Anchor } from '@/components/atoms';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid #fccfbc;
  border-radius: 17px;
`;

const Contributor = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  padding: 24px 24px 24px 24px;
  position: relative;
  ${({ isSelected }) =>
    isSelected &&
    `right: 70px;
           background: linear-gradient(277.41deg, #FF5C00 18.51%, #FF7700 35.87%, #FF8C39 64.93%);
           border-radius: 14.5822px;
          `}
`;

type Props = {
  contributors: Array<{
    name: string;
    text: string;
    image: string;
    link?: string;
  }>;
};

export const Contributors = ({ contributors }: Props) => {
  const [selectedIndex, setSelected] = useState(0);
  useEffect(() => {
    setSelected(getRandomInRange(contributors.length));
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Box margin={'0 0 60px 0'}>
        <Text
          color={'#282828'}
          fontWeight={700}
          fontSize={'45px'}
          display={'inline'}
        >
          The{' '}
        </Text>
        <Text
          color={'#F26122'}
          fontWeight={700}
          fontSize={'45px'}
          display={'inline'}
        >
          Rocket School{' '}
        </Text>
        <Text
          color={'#282828'}
          fontWeight={700}
          fontSize={'45px'}
          display={'inline'}
        >
          Crew
        </Text>
      </Box>
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
              <Box margin={'0 0 0 16px'} height={'70px'} width={'420px'}>
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
                <Text
                  fontSize={'13px'}
                  fontWeight={400}
                  color={selectedIndex === index ? '#FFFFFF' : ''}
                  margin={'5px 0 0 0'}
                  width={'385px'}
                >
                  {text}
                </Text>
              </Box>
            </Contributor>
          );
        })}
      </Wrapper>
    </div>
  );
};
