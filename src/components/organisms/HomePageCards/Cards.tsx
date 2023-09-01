import { useState } from 'react';
import styled from 'styled-components';
import { homePageCards } from '@/content/homePage';
import { Card } from '@/components/molecules/Card/Card';
import { Flex } from '@/components/atoms';

const CardsWrapper = styled.div`
  flex-wrap: wrap;
  gap: 20px;
`;

export const Cards = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  /* gap={'20px'} flexWrap={'wrap'}*/
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
