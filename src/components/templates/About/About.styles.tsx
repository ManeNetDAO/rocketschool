import styled from 'styled-components';
import { mediaQueries } from '@/constants/mediaQueries';

export const Main = styled.main`
  padding: 55px 100px;
  ${mediaQueries.mobile} {
    padding: 12px;
  }
`;
