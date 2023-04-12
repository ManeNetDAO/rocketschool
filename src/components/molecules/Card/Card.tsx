import styled from 'styled-components';
import { SVG, SVGName, Text, Flex } from '@/components/atoms/';
import { colors } from '@/constants/styles';

export type Props = {
  isSelected: boolean;
  setSelected: () => void;
  svg: SVGName;
  title: string;
  about: string;
  pointer: {
    text: string;
    link: string;
  };
};

const Container = styled.a<{ isSelected: boolean }>`
  padding: 24px;
  border-radius: 14px;
  box-shadow: -7.89216px 5.63725px 43.9706px rgba(0, 0, 0, 0.1);

  ${({ isSelected }) =>
    isSelected &&
    `
    background: linear-gradient(270.18deg, #194A84 8.85%, #174780 63.18%, #0F3057 154.12%);
    div {
      color: #ffffff;
    }
    a {
      color: #ffffff;
    }
    path {
      fill: #ffffff;
    }
    circle {
      stroke: #ffffff;
    }
  `}
`;

export const Card = ({
  title,
  svg,
  about,
  pointer,
  isSelected,
  setSelected,
}: Props) => {
  return (
    <Container
      isSelected={isSelected}
      onMouseOver={setSelected}
      href={pointer.link}
    >
      <SVG name={svg} width={53} height={53} color={colors.image.blue} />
      {title && (
        <Text
          fontWeight={700}
          color={'#282828'}
          fontSize={'24px'}
          margin={'12px 0 16px 0'}
        >
          {title}
        </Text>
      )}
      <Text
        fontWeight={700}
        color={'#282828'}
        fontSize={'16px'}
        lineHeight={'29px'}
      >
        {about}
      </Text>
      {pointer && (
        <Flex
          justifyContent={'flex-end'}
          alignItems={'center'}
          margin={'12px 0 0 0'}
        >
          <Text
            margin={'0 8px 0 0'}
            color={colors.image.blue}
            fontSize={'15px'}
          >
            {pointer.text}
          </Text>
          <SVG
            name={'circleArrow'}
            width={27}
            height={19}
            color={colors.image.blue}
          />
        </Flex>
      )}
    </Container>
  );
};
