import styled from 'styled-components';
import { mediaQueries } from '@/constants/mediaQueries';

export const H1 = styled.h1<{
  fontSize?: string;
  color?: string;
  fontWeight?: number;
  isInline?: boolean;
  lineHeight?: string;
  textAlign?: string;
  padding?: string;
  mobileSize?: string;
}>`
  color: ${({ color }) => (color ? color : 'rgba(40, 40, 40, 1)')};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ isInline }) => isInline && `display: inline;`}

  ${({ mobileSize }) =>
    mobileSize &&
    `
    ${mediaQueries.mobile} {
      font-size: ${mobileSize};
  }
  `}
`;

export const H2 = styled.h2<{
  fontSize?: string;
  color?: string;
  margin?: string;
  fontWeight?: number;
  isInline?: boolean;
  lineHeight?: string;
  textAlign?: string;
}>`
  color: ${({ color }) => (color ? color : 'rgba(40, 40, 40, 1)')};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ isInline }) => isInline && `display: inline;`}
`;
