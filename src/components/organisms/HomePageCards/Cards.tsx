import { useState } from 'react';
import styled from 'styled-components';
import { homePageCards } from '@/content/homePage';
import { Card } from '@/components/molecules/Card/Card';
import { Flex } from '@/components/atoms';

const CardsWrapper = styled(Flex)`
  overflow-y: scroll;
`;

export const Cards = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <CardsWrapper gap={'5%'}>
      {homePageCards.map(({ svg, about, title, pointer }, index) => {
        return (
          <Card
            isSelected={index === selectedIndex}
            key={svg}
            svg={svg}
            about={about}
            title={title}
            pointer={pointer}
            setSelected={() => setSelectedIndex(index)}
          />
        );
      })}
    </CardsWrapper>
  );
};
