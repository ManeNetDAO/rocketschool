import styled from 'styled-components';

export const Absolute = styled.div<{
  top?: string;
  left?: string;
  zIndex?: number;
  centered?: boolean;
  width?: string;
  height?: string;
}>`
  position: absolute;
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  ${({ centered }) => centered && `transform: translate(-50%, -50%);`}

  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`;
