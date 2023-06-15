import styled from 'styled-components';
import { mediaQueries } from '@/constants/mediaQueries';

export const Mobile = styled.div`
  display: none;
  ${mediaQueries.mobile} {
    display: inherit;
  }
`;

export const Desktop = styled.div`
  display: flex;
  ${mediaQueries.mobile} {
    display: none;
  }
`;
