import styled from 'styled-components';
export const Flex = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  margin?: string;
  padding?: string;
  height?: string;
  width?: string;
  gap?: string;
  whiteSpace?: string;
}>`
  display: flex;

  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ gap }) => gap && `gap: ${gap};`}

  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}

  ${({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`}
`;
