import styled from 'styled-components';
import { Flex, Text } from '@/components/atoms';
import { colors } from '@/constants/styles';

const Card = styled(Flex)`
  width: 305px;
  background: #ffffff;
  box-shadow: -7.89216px 5.63725px 43.9706px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  flex-direction: column;
  white-space: normal;
`;

export type GridCards = Array<{
  name: string;
  about: string;
}>;

export const CardGrid = ({ gridCards }: { gridCards: GridCards }) => {
  return (
    <Flex flexDirection={'column'} gap={'5%'}>
      <Flex gap={'5%'}>
        <Card padding={'24px'}>
          <Text color={colors.text.orange} fontSize={'24px'} fontWeight={700}>
            {gridCards[0].name}
          </Text>
          <Text fontSize={'14px'}>{gridCards[0].about}</Text>
        </Card>
        <Card padding={'24px'}>
          <Text color={colors.text.orange} fontSize={'24px'} fontWeight={700}>
            {gridCards[1].name}
          </Text>
          <Text fontSize={'14px'}>{gridCards[1].about}</Text>
        </Card>
      </Flex>
      <Flex gap={'5%'} margin={'20px 0 0 0'}>
        <Card padding={'24px'}>
          <Text color={colors.text.orange} fontSize={'24px'} fontWeight={700}>
            {gridCards[2].name}
          </Text>
          <Text fontSize={'14px'}>{gridCards[2].about}</Text>
        </Card>
        <Card padding={'24px'}>
          <Text color={colors.text.orange} fontSize={'24px'} fontWeight={700}>
            {gridCards[3].name}
          </Text>
          <Text fontSize={'14px'}>{gridCards[3].about}</Text>
        </Card>
      </Flex>
    </Flex>
  );
};
