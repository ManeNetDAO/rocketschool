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
    padding-bottom: 70px;
  }
`;

export type VideosProps = {
  primaryHeading: string;
  videos: Array<ElemData>;
  prevVideos: Array<ElemData>;
  nextVideos: Array<ElemData>;
  prevSlug: String;
  nextSlug: String;
};
export const Videos = ({ primaryHeading, videos, prevVideos, prevSlug, nextSlug }: VideosProps) => {
  return (
    <div>
      <SecondaryHeader title={primaryHeading} />
      <VideoWrapper>
        <VideoCourse videos={videos} prevVideos={prevVideos} prevSlug={prevSlug} nextSlug={nextSlug} />
      </VideoWrapper>
      <Footer />
    </div>
  );
};
