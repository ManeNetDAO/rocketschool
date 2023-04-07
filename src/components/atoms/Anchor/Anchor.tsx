import styled from 'styled-components';

export const Anchor = styled.a<{
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  margin?: string;
}>`
  color: ${({ color }) => (color ? color : '#000000')};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  &:hover {
    text-decoration: underline;
  }
`;
