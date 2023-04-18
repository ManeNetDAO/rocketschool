import styled from 'styled-components';

export const Section = styled.section<{
  display?: string;
  justifyContent?: string;
  padding?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  width?: string;
  height?: string;
}>`
  ${({ display }) => display && `display: ${display};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ padding }) => padding && `padding: ${padding};`}

  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background-image: ${backgroundImage};
    background-repeat: no-repeat;
    `}
  ${({ backgroundSize }) =>
    backgroundSize && `background-size: ${backgroundSize};`}
`;
