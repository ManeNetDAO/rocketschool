import styled from 'styled-components';
import { Anchor, SVG, SVGName, Text, Flex } from '@/components/atoms/';

export type Props = {
  isBig: boolean;
  isSelected: boolean;
  setSelected: () => void;
  svg: SVGName;
  title?: string;
  about: string;
  pointer?: {
    text: string;
    link: string;
  };
};

const Container = styled.div<{ isSelected: boolean }>`
  padding: 24px;
  border-radius: 14px;
  box-shadow: -7.89216px 5.63725px 43.9706px rgba(0, 0, 0, 0.1);

  ${({ isSelected }) =>
    isSelected &&
    `
    background: linear-gradient(
      277.41deg,
      #ff5c00 18.51%,
      #ff7700 35.87%,
      #ff8c39 64.93%
    );
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
  isBig,
  title,
  svg,
  about,
  pointer,
  isSelected,
  setSelected,
}: Props) => {
  const imageSize = isBig ? 53 : 43;
  const aboutSize = isBig ? '16px' : '14px';

  return (
    <Container isSelected={isSelected} onMouseOver={setSelected}>
      <SVG name={svg} width={imageSize} height={imageSize} />
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
        fontSize={aboutSize}
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
          <Anchor
            margin={'0 8px 0 0'}
            color={'#282828'}
            fontSize={'15px'}
            href={pointer.link}
          >
            {pointer.text}
          </Anchor>
          <SVG name={'circleArrow'} width={27} height={19} />
        </Flex>
      )}
    </Container>
  );
};
