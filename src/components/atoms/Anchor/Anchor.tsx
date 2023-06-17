import styled from 'styled-components';

export const Anchor = styled.a<{
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  margin?: string;
  padding?: string;
  textDecoration?: string;
}>`
  color: ${({ color }) => (color ? color : '#000000')};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration};`}

  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;
