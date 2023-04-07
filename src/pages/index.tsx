import { Contributors } from '@/components/molecules/Contributors/Contributors';
import { contributors } from '@/content/contributors';
import { Cards } from '@/components/organisms/HomePageCards/Cards';

const Main = () => {
  return (
    <div style={{ marginLeft: '100px' }}>
      <Contributors contributors={contributors} />
      <Cards />
    </div>
  );
};

export default Main;
