import { Section } from '@/components/atoms';
import { Footer } from '@/components/organisms/Footer/Footer';
import { primaryHeading } from '@/content/videoPage';

import { Main } from '@/components/templates/About/About.styles';
import { SecondaryHeader } from '@/components/organisms/Header/SecondaryHeader';
import { VideoCourse } from '@/components/organisms/VideoCourse/VideoCourse';

export const Videos = () => {
  return (
    <div>
      <SecondaryHeader title={primaryHeading} />
      <Main></Main>
      <Section>
        <VideoCourse />
      </Section>
      <Footer />
    </div>
  );
};
