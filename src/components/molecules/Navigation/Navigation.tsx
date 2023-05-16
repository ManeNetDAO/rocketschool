import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

import { Anchor, TextButton } from '@/components/atoms';
import { Modal } from '@/components/molecules/Modal/Modal';

import { navigation } from '@/content/global';
import { colors } from '@/constants/styles';
import { mediaQueries } from '@/constants/mediaQueries';

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  padding: 6px 20px;
  &:hover {
    opacity: 0.5;
  }
  white-space: nowrap;
`;

const StyledNav = styled.nav`
  display: none;
  ${mediaQueries.desktop} {
    display: inherit;
  }
`;

export const Navigation = () => {
  const [modalContent, setModal] = useState<ReactNode | null>(null);

  return (
    <React.Fragment>
      <StyledNav>
        <List>
          {navigation.map((n) => {
            return (
              <Item key={n.name}>
                {n.isPage && (
                  <Anchor href={n.link} color={colors.text.white}>
                    {n.name}
                  </Anchor>
                )}
                {!n.isPage && (
                  <TextButton
                    onClick={() => setModal(n.contentElem)}
                    color={colors.text.white}
                  >
                    {n.name}
                  </TextButton>
                )}
              </Item>
            );
          })}
        </List>
      </StyledNav>
      {modalContent && (
        <Modal close={() => setModal(null)}>{modalContent}</Modal>
      )}
    </React.Fragment>
  );
};
