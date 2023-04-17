import { Button, Flex, Text, H1 } from '@/components/atoms';
import { colors } from '@/constants/styles';
import { ColorHeading } from '@/components/molecules/ColorHeading/ColorHeading';
import { heroLines } from '@/content/homePage';

export const Hero = () => {
  return (
    <Flex flexDirection={'column'} margin={'230px 0 0 0'}>
      <Text
        color={colors.text.orange}
        fontSize={'16px'}
        fontWeight={700}
        margin={'0 0 12px 0'}
      >
        LEARN DECENTRALIZED STAKING
      </Text>
      <H1 lineHeight={'53px'}>
        <ColorHeading fontSize={'52px'} lines={heroLines} />
      </H1>
      <Text
        fontSize={'16px'}
        margin={'20px 0'}
        maxWidth={'570px'}
        lineHeight={'29px'}
      >
        Learn about Ethereum, Rocket Pool, running a node, maintaining a node.
        We will guide you through the technical details of running a node at
        home and how to optimize your setup.
      </Text>
      <Flex>
        <Button margin={'0 12px 0 0'}>Get started</Button>
        <Button isLight padding={'10px 40px'}>
          What is Rocket School?
        </Button>
      </Flex>
    </Flex>
  );
};
