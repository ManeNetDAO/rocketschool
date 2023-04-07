import styled from 'styled-components';
import { SVG, SVGName, Text } from '@/components/atoms/';

export type Props = {
  isBig: boolean;
  svg: SVGName;
  title?: string;
  about: string;
  pointer?: {
    text: string;
    link: string;
  };
};

const Container = styled.div`
  padding: 24px;
  border-radius: 14px;
  box-shadow: -7.89216px 5.63725px 43.9706px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(
      277.41deg,
      #ff5c00 18.51%,
      #ff7700 35.87%,
      #ff8c39 64.93%
    );
    div {
      color: #ffffff;
    }
    path {
      fill: #ffffff;
    }
  }
`;

export const Card = ({ isBig, title, svg, about }: Props) => {
  const imageSize = isBig ? 53 : 43;
  const aboutSize = isBig ? '16px' : '14px';

  return (
    <Container>
      <SVG name={svg} width={imageSize} height={imageSize} />
      {title && (
        <Text fontWeight={700} color={'#282828'} fontSize={'24px'}>
          {title}
        </Text>
      )}
      <Text fontWeight={700} color={'#282828'} fontSize={aboutSize}>
        {about}
      </Text>
    </Container>
  );
};
