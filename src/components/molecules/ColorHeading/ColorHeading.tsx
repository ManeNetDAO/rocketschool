import React from 'react';
import { colors } from '@/constants/styles';
import { Text, Flex } from '@/components/atoms';

export type Line = Array<{
  color: 'orange' | 'black';
  text: string;
}>;
type Props = {
  fontSize: string;
  lines: Array<Line>;
};

export const ColorHeading = ({ lines, fontSize }: Props) => {
  return (
    <React.Fragment>
      {lines.map((l, i) => (
        <Flex key={i}>
          {l.map((t) => (
            <Text
              key={t.text}
              fontSize={fontSize}
              color={colors.text[t.color]}
              fontWeight={700}
            >
              {t.text}
            </Text>
          ))}
        </Flex>
      ))}
    </React.Fragment>
  );
};
