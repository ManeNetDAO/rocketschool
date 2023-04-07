import styled from 'styled-components';
export const Text = styled.div<{
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  margin?: string;
  width?: string;
  display?: string;
}>`
  color: ${({ color }) => (color ? color : '#000000')};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ display }) => display && `display: ${display};`}
`;
