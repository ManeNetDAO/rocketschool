import styled from 'styled-components';

export const Anchor = styled.a<{
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  margin?: string;
  padding?: string;
}>`
  color: ${({ color }) => (color ? color : '#000000')};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}

  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;
