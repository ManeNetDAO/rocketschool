import { useState } from 'react';
import styled from 'styled-components';
import { homePageCards } from '@/content/homePage';
import { Card } from '@/components/molecules/Card/Card';
import { Flex } from '@/components/atoms';

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  a {
    flex: 1 1 30%;
  }
`;

export const Cards = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <CardsWrapper>
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
