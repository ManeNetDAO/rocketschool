import styled from 'styled-components';

export const Section = styled.section<{
  display?: string;
  justifyContent?: string;
  padding?: string;
  backgroundImage?: string;
  backgroundSize?: string;
}>`
  ${({ display }) => display && `display: ${display};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ padding }) => padding && `padding: ${padding};`}

  ${({ backgroundImage }) =>
    backgroundImage && `background-image: ${backgroundImage};`}
  ${({ backgroundSize }) =>
    backgroundSize && `background-size: ${backgroundSize};`}
`;
