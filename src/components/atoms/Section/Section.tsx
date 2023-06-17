import styled from 'styled-components';
import { mediaQueries } from '@/constants/mediaQueries';

export const Section = styled.section<{
  display?: string;
  justifyContent?: string;
  padding?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  width?: string;
  height?: string;
  position?: string;
  mobilePadding?: string;
  mobileBGImage?: string;
}>`
  ${({ display }) => display && `display: ${display};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ position }) => position && `position: ${position};`}

  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background-image: ${backgroundImage};
    background-repeat: no-repeat;
    `}
  ${({ backgroundSize }) =>
    backgroundSize && `background-size: ${backgroundSize};`}

  ${({ mobilePadding }) =>
    mobilePadding &&
    `
    ${mediaQueries.mobile} {
      padding: ${mobilePadding};
  }
  `}

  ${({ mobileBGImage }) =>
    mobileBGImage &&
    `
    ${mediaQueries.mobile} {
      background-image: ${mobileBGImage};
      background-size: cover;
  }
  `}
`;
