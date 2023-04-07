import styled from 'styled-components';
export const Flex = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  margin?: string;
  height?: string;
  width?: string;
  gap?: string;
}>`
  display: flex;

  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ gap }) => gap && `gap: ${gap};`}

  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
`;
