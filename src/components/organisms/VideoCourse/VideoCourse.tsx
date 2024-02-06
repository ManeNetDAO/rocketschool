import { useRouter } from 'next/router';
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import {
  Flex,
  LazyVideo,
  Text,
  Button,
  Absolute,
  Desktop,
  Mobile,
} from '@/components/atoms';
import {
  ColumnList,
  ElemData,
} from '@/components/molecules/ColumnList/ColumnList';
import { Loader } from '@/components/atoms/Loader/Loader';
import { mediaQueries } from '@/constants/mediaQueries';

const CourseContainer = styled(Flex)`
  padding: 0 60px 100px;
  ${mediaQueries.mobile} {
    flex-direction: column;
    padding: 0 20px 0;
  }
`;

export const VideoCourse = ({ videos, prevVideos, prevSlug, nextSlug }:
  { videos: Array<ElemData>, prevVideos: Array<ElemData>, prevSlug: String, nextSlug: String }) => {
  const { push, query, isReady } = useRouter();
  const { slug } = query;
  const [selectedIndex, setSelected] = useState(0);
  const [iframeLoaded, setLoaded] = useState(false);
  const [queryIsReady, setReady] = useState(false);
  const navigate = (path: string) => {
    window.location.href = window.location.origin + path;
  };

  useEffect(() => {
    if (isReady) {
      setReady(true);
      let initialIndex = 0;
      if (typeof query.video === 'string') {
        initialIndex = Math.abs(parseInt(query.video) - 1) || 0;
      }
      setSelected(initialIndex);
    }
    //eslint-disable-next-line
  }, [isReady]);

  const setLoadedTrue = useCallback(() => setLoaded(true), []);

  const handleChange = useCallback(
    (newIndex: number) => {
      if (selectedIndex === newIndex) return;
      setLoaded(false);
      setSelected(newIndex);
      push(
        {
          pathname: slug as string,
          query: { video: newIndex + 1 },
        },
        undefined,
        { shallow: true }
      );
    },
    [push, selectedIndex, slug]
  );

  const columnList = (
    <ColumnList
      title={'Video Lessons'}
      list={videos}
      selectedIndex={selectedIndex}
      setSelected={handleChange}
    />
  );

  return (
    <CourseContainer>
      <Desktop>{columnList}</Desktop>
      <Flex
        flexDirection={'column'}
        position={'relative'}
        flex={1}
        padding={'0 160px 0 0'}
        mobilePadding={'0'}
      >
        {!iframeLoaded && queryIsReady && (
          <Absolute left={'42%'} centered top={'30%'}>
            <Loader />
          </Absolute>
        )}
        {queryIsReady && (
          <React.Fragment>
            <LazyVideo
              onLoad={setLoadedTrue}
              src={videos[selectedIndex].url}
              width={'100%'}
              height={'auto'}
              mobileWidth={'100%'}
              borderRadius={'32px'}
            />
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              margin={'28px 0 0 0'}
              flexWrap={'wrap'}
            >
              <Text
                fontWeight={700}
                fontSize={'27px'}
                mobileSize={'20px'}
                margin={'0 0 28px'}
              >
                {videos[selectedIndex].title}
              </Text>
              <Flex margin={'0 0 28px'} flexWrap={'wrap'} gap={'12px'}>
                {(selectedIndex !== 0 || (selectedIndex == 0 && prevSlug !== '')) && (
                  <Button
                    isLight
                    onClick={() => {
                      if (selectedIndex !== 0) {
                        handleChange(selectedIndex - 1);
                      }
                      else {
                        navigate(`/${prevSlug}?video=${prevVideos.length}`);
                      }
                    }}
                  >
                    Previous {selectedIndex !== 0 ? 'Video' : 'Section'}
                  </Button>
                )}
                {((videos.length - 1 !== selectedIndex) || (videos.length - 1 === selectedIndex && nextSlug !== '')) && (
                  <Button onClick={() => {
                    if (videos.length - 1 !== selectedIndex) {
                      handleChange(selectedIndex + 1);
                    }
                    else {
                      navigate(`/${nextSlug}?video=1`);
                    }
                  }}>
                    Next {videos.length - 1 !== selectedIndex ? 'Video' : 'Section'}
                  </Button>
                )}
              </Flex>
            </Flex>
          </React.Fragment>
        )}
      </Flex>
      <Mobile>{columnList}</Mobile>
    </CourseContainer>
  );
};
