import styled from 'styled-components';
import { colors } from '@/constants/styles';
import { mediaQueries } from '@/constants/mediaQueries';
export const Text = styled.div<{
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  margin?: string;
  width?: string;
  display?: string;
  lineHeight?: string;
  maxWidth?: string;
  mobileSize?: string;
}>`
  color: ${({ color }) => (color ? color : colors.text.black)};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ display }) => display && `display: ${display};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}

  ${({ mobileSize }) =>
    mobileSize &&
    `
    ${mediaQueries.mobile} {
      font-size: ${mobileSize};
  }
  `}
`;
