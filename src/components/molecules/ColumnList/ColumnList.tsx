import styled from 'styled-components';
import { Flex, H2, Text } from '@/components/atoms';
import { colors } from '@/constants/styles';

export type ElemData = {
  title: string;
  about: string;
  url: string;
};

type Props = {
  title: string;
  list: Array<ElemData>;
  selectedIndex: number;
  setSelected: (index: number) => void;
};

const Container = styled(Flex)`
  height: 648px;
  width: 340px;
  overflow: hidden;
  overflow-y: scroll;
  border-right: 1px solid #d5d5d5;
  margin-right: 20px;

  ::-webkit-scrollbar {
    width: 8px; /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.text.orange}; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }

  //firefox
  scrollbar-color: ${colors.text.orange} ${colors.image.blue};
  scrollbar-width: thin;
`;

const Elem = styled.div`
  position: relative;
  padding: 2px 27px 35px 27px;
  border-left: 1px solid rgba(240, 240, 240, 1);
  &:last-child {
    border-left: none;
  }
  cursor: pointer;
`;

const ListNumber = styled.div<{ isSelected: boolean }>`
  position: absolute;
  top: 0px;
  left: -12px;
  background-color: ${({ isSelected }) => (isSelected ? '#F26122' : '#B0B0B0')};
  height: 24px;
  width: 24px;
  border-radius: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: ${colors.text.white};
`;

export const ColumnList = ({
  title,
  list,
  selectedIndex,
  setSelected,
}: Props) => {
  return (
    <Container
      flexDirection={'column'}
      padding={'0 0 0 32px'}
      margin={'0 0 0 30px'}
    >
      <H2 fontSize={'21px'} fontWeight={700} margin={'0 0 26px 0'}>
        {title}
      </H2>
      {list.map(({ title, about }, i) => (
        <Elem key={title} onClick={() => setSelected(i)}>
          <ListNumber isSelected={selectedIndex === i}>{i + 1}</ListNumber>
          <Text fontSize={'14px'} fontWeight={700}>
            {title}
          </Text>
          <Text
            fontSize={'14px'}
            margin={'10px 0 0 0'}
            color={colors.text.light}
          >
            {about}
          </Text>
        </Elem>
      ))}
    </Container>
  );
};