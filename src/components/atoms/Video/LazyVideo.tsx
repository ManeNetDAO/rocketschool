import { memo } from 'react';
import dynamic, { LoadableComponent } from 'next/dynamic';
import { Props } from './Video';
import { Box } from '../Box/Box';

type LazyProps = Props & { width: string; height: string };
export const LazyVideo = memo((props: LazyProps) => {
  const DynamicComponent: LoadableComponent<LazyProps> = dynamic(() =>
    import(`./Video`).then(({ Video }) => Video)
  );

  return (
    <Box width={props.width} height={props.height}>
      <DynamicComponent {...props} />
    </Box>
  );
});

LazyVideo.displayName = 'LazyVideo';
