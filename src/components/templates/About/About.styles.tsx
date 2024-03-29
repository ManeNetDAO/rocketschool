import styled from 'styled-components';
import { mediaQueries } from '@/constants/mediaQueries';

export const Main = styled.main`
  padding: 55px 100px;
  ${mediaQueries.mobile} {
    padding: 20px 20px 100px;
  }
`;
