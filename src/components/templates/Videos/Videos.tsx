import { Section } from '@/components/atoms';
import { Footer } from '@/components/organisms/Footer/Footer';

import { Main } from '@/components/templates/About/About.styles';
import { SecondaryHeader } from '@/components/organisms/Header/SecondaryHeader';
import { VideoCourse } from '@/components/organisms/VideoCourse/VideoCourse';
import { ElemData } from '@/components/molecules/ColumnList/ColumnList';

export type VideosProps = {
  primaryHeading: string;
  videos: Array<ElemData>;
};
export const Videos = ({ primaryHeading, videos }: VideosProps) => {
  return (
    <div>
      <SecondaryHeader title={primaryHeading} />
      <Main />
      <Section>
        <VideoCourse videos={videos} />
      </Section>
      <Footer />
    </div>
  );
};
