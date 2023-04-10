import { useState } from 'react';
import { homePageCards } from '@/content/homePage';
import { Card } from '@/components/molecules/Card/Card';
import { Flex } from '@/components/atoms';

export const Cards = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Flex gap={'5%'}>
      {homePageCards.map(({ svg, about, title, pointer }, index) => {
        return (
          <Card
            isSelected={index === selectedIndex}
            key={svg}
            isBig={true}
            svg={svg}
            about={about}
            title={title}
            pointer={pointer}
            setSelected={() => setSelectedIndex(index)}
          />
        );
      })}
    </Flex>
  );
};
