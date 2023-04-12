import dynamic, { LoadableComponent } from 'next/dynamic';
import { Props } from './Video';

export const LazyVideo = (props: Props) => {
  const DynamicComponent: LoadableComponent<Props> = dynamic(() =>
    import(`./Video`).then(({ Video }) => Video)
  );
  return <DynamicComponent {...props} />;
};
