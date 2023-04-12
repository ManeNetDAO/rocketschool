import styled from 'styled-components';
import { ReactNode } from 'react';

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;

  display: flex;
  justify-content: center;
`;

export const Modal = ({
  children,
  close,
}: {
  children: Array<ReactNode> | ReactNode;
  close: () => void;
}) => {
  return (
    <Wrapper onClick={close}>
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </Wrapper>
  );
};
