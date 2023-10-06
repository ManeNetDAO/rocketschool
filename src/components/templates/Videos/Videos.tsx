import { Footer } from '@/components/organisms/Footer/Footer';
import { SecondaryHeader } from '@/components/organisms/Header/SecondaryHeader';
import { VideoCourse } from '@/components/organisms/VideoCourse/VideoCourse';
import { ElemData } from '@/components/molecules/ColumnList/ColumnList';
import styled from 'styled-components';
import { mediaQueries } from '@/constants/mediaQueries';

const VideoWrapper = styled.div`
  padding-top: 100px;
  ${mediaQueries.mobile} {
    padding-top: 40px;
  }
`;

export type VideosProps = {
  primaryHeading: string;
  videos: Array<ElemData>;
};
export const Videos = ({ primaryHeading, videos }: VideosProps) => {
  return (
    <div>
      <SecondaryHeader title={primaryHeading} />
      <VideoWrapper>
        <VideoCourse videos={videos} />
      </VideoWrapper>
      <Footer />
    </div>
  );
};
