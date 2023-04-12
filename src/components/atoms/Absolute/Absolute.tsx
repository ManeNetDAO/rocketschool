import styled from 'styled-components';

export const Absolute = styled.div<{
  top?: string;
  left?: string;
  zIndex?: number;
  centered?: boolean;
}>`
  position: absolute;
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  ${({ centered }) => centered && `transform: translate(-50%, -50%);`}
`;
