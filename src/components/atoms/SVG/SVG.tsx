import { memo } from 'react';
import styled from 'styled-components';
import dynamic, { LoadableComponent } from 'next/dynamic';

const SVGWrapper = styled.div<{
  width: number;
  height: number;
  margin?: string;
}>`
  display: inline-block;
  flex-shrink: 0;
  ${({ margin }) =>
    margin &&
    `
  margin: ${margin};`}
  width: ${({ width }) => `${width}px;`}
  height: ${({ height }) => `${height}px;`}
`;

export type SVGName =
  | 'ethereum'
  | 'nodes'
  | 'wrench'
  | 'circleArrow'
  | 'rocket';
type props = {
  id?: string;
  name: SVGName;
  margin?: string;
  width: number;
  height: number;
  color?: string;
};

export const SVG = memo(({ id, name, width, height, color, margin }: props) => {
  const DynamicComponent: LoadableComponent<{ color?: string }> = dynamic(
    () => import(`./files/${name}`)
  );

  return (
    <SVGWrapper id={id} margin={margin} width={width} height={height}>
      <DynamicComponent color={color} />
    </SVGWrapper>
  );
});

SVG.displayName = 'SVG';
