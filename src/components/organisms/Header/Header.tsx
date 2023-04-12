import { Navigation } from '@/components/molecules/Navigation/Navigation';
import { Flex } from '@/components/atoms';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <Flex justifyContent={'space-between'}>
        <Image
          src={`/images/logo.png`}
          alt={'Rocket School'}
          width={248}
          height={48}
        />
        <Navigation />
      </Flex>
    </header>
  );
};
