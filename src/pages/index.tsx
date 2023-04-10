import { Navigation } from '@/components/molecules/Navigation/Navigation';
import { Contributors } from '@/components/molecules/Contributors/Contributors';
import { contributors } from '@/content/contributors';
import { Cards } from '@/components/organisms/HomePageCards/Cards';
import { Button } from '@/components/atoms';

const Main = () => {
  return (
    <div>
      <Navigation />
      <Button>Get started</Button>
      <Button isLight padding={'10px 40px'}>
        What is Rocket School?
      </Button>
      <div style={{ marginLeft: '100px' }}>
        <Contributors contributors={contributors} />
        <Cards />
      </div>
    </div>
  );
};

export default Main;
