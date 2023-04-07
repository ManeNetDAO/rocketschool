import { homePageCards } from '@/content/homePage';
import { Card } from '@/components/molecules/Card/Card';
import { Flex } from '@/components/atoms';

export const Cards = () => {
  return (
    <Flex gap={'5%'}>
      {homePageCards.map(({ svg, about, title, pointer }) => {
        return (
          <Card
            key={svg}
            isBig={true}
            svg={svg}
            about={about}
            title={title}
            pointer={pointer}
          />
        );
      })}
    </Flex>
  );
};
