import { useRouter } from 'next/router';
import React, { useState, useCallback, useEffect } from 'react';
import { Flex, LazyVideo, Text, Button, Absolute } from '@/components/atoms';
import { ColumnList } from '@/components/molecules/ColumnList/ColumnList';
import { videos } from '@/content/videoPage';
import { Loader } from '@/components/atoms/Loader/Loader';

export const VideoCourse = () => {
  const { push, query, isReady } = useRouter();
  const [selectedIndex, setSelected] = useState(0);
  const [iframeLoaded, setLoaded] = useState(false);
  const [queryIsReady, setReady] = useState(false);

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
      setLoaded(false);
      setSelected(newIndex);
      push(
        {
          query: { video: newIndex + 1 },
        },
        undefined,
        { shallow: true }
      );
    },
    [push]
  );

  return (
    <Flex padding={'0 0 100px 0'}>
      <ColumnList
        title={'All The Videos'}
        list={videos}
        selectedIndex={selectedIndex}
        setSelected={handleChange}
      />
      <Flex flexDirection={'column'} position={'relative'}>
        {!iframeLoaded && queryIsReady && (
          <Absolute left={'50%'} centered top={'30%'}>
            <Loader />
          </Absolute>
        )}
        {queryIsReady && (
          <React.Fragment>
            <LazyVideo
              onLoad={setLoadedTrue}
              src={videos[selectedIndex].url}
              width={'834px'}
              height={'500px'}
              borderRadius={'32px'}
            />
            <Flex
              justifyContent={'space-between'}
              alignItems={'center'}
              margin={'28px 0 0 0'}
            >
              <Text fontWeight={700} fontSize={'28px'}>
                {videos[selectedIndex].title}
              </Text>
              <Flex>
                {selectedIndex !== 0 && (
                  <Button
                    isLight
                    onClick={() => handleChange(selectedIndex - 1)}
                  >
                    Previous Video
                  </Button>
                )}
                {videos.length - 1 !== selectedIndex && (
                  <Button
                    margin={'0 0 0 12px'}
                    onClick={() => handleChange(selectedIndex + 1)}
                  >
                    Next Video
                  </Button>
                )}
              </Flex>
            </Flex>
          </React.Fragment>
        )}
      </Flex>
    </Flex>
  );
};
