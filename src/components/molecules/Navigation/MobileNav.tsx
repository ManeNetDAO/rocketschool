import { mediaQueries } from '@/constants/mediaQueries';
import { navigation } from '@/content/global';

import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/styles';
import { Anchor, TextButton } from '@/components/atoms';

const NavbarMenuIcon = styled.div`
  ${mediaQueries.desktop} {
    display: none;
  }
  color: ${colors.text.white};
  font-size: 18px;
  cursor: pointer;
  user-select: none;
`;

const NavbarMenu = styled.div`
  ${mediaQueries.desktop} {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  padding: 0.6rem;
  background-color: ${colors.text.orange};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  z-index: 2;
`;

const NavbarMenuItem = styled.div`
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  color: ${colors.text.white};

  &:hover {
    opacity: 0.8;
  }
`;

export const MobileNav = ({
  setModal,
}: {
  setModal: (node: ReactNode) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarMenuIcon onClick={handleMenuClick}>
        {isOpen ? 'X' : '☰'}
      </NavbarMenuIcon>
      {isOpen && (
        <NavbarMenu>
          {navigation.map((n) => {
            return (
              <NavbarMenuItem key={n.name}>
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
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
      )}
    </>
  );
};
