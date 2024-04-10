import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import styled from 'styled-components';
import { Container } from '@mui/material';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FunctionComponent<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <>
 
  
   

      <SidebarMenu isOpen={isOpen} >
        {SidebarData.map((item, index) => (
          <MenuItems key={index} >
            <MenuItemLinks to={item.path}>
              {item.icon}
             <span style={{ marginLeft: '16px' }}>{item.title}</span>
            </MenuItemLinks>
          </MenuItems>
        ))}
      </SidebarMenu>
    </>
  );
};



const SidebarMenu = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '200px' : '150px')};
  height: 100vh;
  background-color: grey;
  position: fixed;

  top: 0;
  left: 0;
  transition: width 0.3s ease;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  marginTop: 20px;
  padding: 16px 0; /* Adjust padding here */
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 16px; /* Adjust padding here */
  font-size: 16px; /* Adjust font size */
  text-decoration: none;
  color: #ffffff;
  marginTop: 20px;

  &:hover {
    background-color: #ffffff;
    color: #000080;
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 16px;
  }
`;


export default Sidebar;
