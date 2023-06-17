import styled from 'styled-components';
import { mediaQueries } from '@/constants/mediaQueries';
export const Box = styled.div<{
  margin?: string;
  padding?: string;
  height?: string;
  width?: string;
  mobileWidth?: string;
  mobileHeight?: string;
  mobilePadding?: string;
  position?: string;
}>`
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ position }) => position && `position: ${position};`}
  
  ${({ mobileWidth, mobileHeight, width, height }) =>
    mobileHeight ||
    (mobileWidth &&
      `
    ${mediaQueries.mobile} {
      width: ${mobileWidth || width};
      height: ${mobileHeight || height};
  }
  `)}

  ${({ mobilePadding }) =>
    mobilePadding &&
    `
    ${mediaQueries.mobile} {
      padding: ${mobilePadding};
  }
  `}
`;
