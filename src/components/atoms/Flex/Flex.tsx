import styled from 'styled-components';
import { mediaQueries } from '@/constants/mediaQueries';
export const Flex = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  flexWrap?: string;
  margin?: string;
  padding?: string;
  height?: string;
  width?: string;
  gap?: string;
  whiteSpace?: string;
  position?: string;
  flex?: number;
  mobilePadding?: string;
}>`
  display: flex;

  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}

  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}

  ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ flex }) => flex && `flex: ${flex};`}

  ${({ mobilePadding }) =>
    mobilePadding &&
    `
    ${mediaQueries.mobile} {
      padding: ${mobilePadding};
  }
  `}
`;
