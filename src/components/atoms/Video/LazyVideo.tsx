import { memo } from 'react';
import dynamic, { LoadableComponent } from 'next/dynamic';
import { Props } from './Video';
import { Box } from '../Box/Box';

type LazyProps = Props & {
  width: string;
  height: string;
  mobileWidth?: string;
  mobileHeight?: string;
};
export const LazyVideo = memo((props: LazyProps) => {
  const { width, height, mobileWidth, mobileHeight } = props;
  const DynamicComponent: LoadableComponent<LazyProps> = dynamic(() =>
    import(`./Video`).then(({ Video }) => Video)
  );

  return (
    <Box
      width={width}
      height={height}
      mobileWidth={mobileWidth}
      mobileHeight={mobileHeight}
    >
      <DynamicComponent {...props} />
    </Box>
  );
});

LazyVideo.displayName = 'LazyVideo';
