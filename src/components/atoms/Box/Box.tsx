import styled from 'styled-components';
export const Box = styled.div<{
  margin?: string;
  height?: string;
  width?: string;
}>`
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
`;