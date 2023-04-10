import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

import { Anchor, TextButton } from '@/components/atoms';
import { Modal } from '@/components/molecules/Modal/Modal';

import { navigation } from '@/content/global';

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 5%;
`;

const Item = styled.li`
  &:hover {
    opacity: 0.5;
  }
`;

export const Navigation = () => {
  const [modalContent, setModal] = useState<ReactNode | null>(null);

  return (
    <React.Fragment>
      <nav>
        <List>
          {navigation.map((n) => {
            return (
              <Item key={n.name}>
                {n.isPage && <Anchor href={n.link}>{n.name}</Anchor>}
                {!n.isPage && (
                  <TextButton onClick={() => setModal(n.contentElem)}>
                    {n.name}
                  </TextButton>
                )}
              </Item>
            );
          })}
        </List>
      </nav>
      {modalContent && (
        <Modal close={() => setModal(null)}>{modalContent}</Modal>
      )}
    </React.Fragment>
  );
};
