import styled, { keyframes } from 'styled-components';

const shift = keyframes`
  0% {
    -webkit-transform:translate3d(-30px,0,0);
    transform:translate3d(-30px,0,0)
  }
  25% {
    -webkit-transform:translate3d(0,-30px,0);
    transform:translate3d(0,-30px,0)
  }
  50% {
    -webkit-transform:translate3d(0,-30px,0);
    transform:translate3d(0,-30px,0)
  }
  75% {
    -webkit-transform:translate3d(-30px,0,0);
    transform:translate3d(-30px,0,0)
  }
  to {
    -webkit-transform:translate3d(-30px,0,0);
    transform:translate3d(-30px,0,0)
  }
`;

const AnimationContainer = styled.div<{ height?: string }>`
  height: ${({ height }) => (height ? height : '60%')};
  width: calc(100% + 30px);
  -webkit-animation: ${shift} 12s ease-in-out infinite;
  animation: ${shift} 12s ease-in-out infinite;
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: flex-end;
  pointer-events: none;
`;

export const AnimatedImage = ({
  src,
  height,
}: {
  src: string;
  height?: string;
}) => {
  return (
    <AnimationContainer height={height}>
      {/*eslint-disable-next-line*/}
      <img src={src} alt={''} />
    </AnimationContainer>
  );
};
