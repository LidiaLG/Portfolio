import React, {useState} from 'react';
import styled from 'styled-components';
import Logo from '../../assets/Logo.svg';
import {FaBars} from 'react-icons/fa';



const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <ContainerHeader>
      <Wrapper>
        <LogoContainer src={Logo} alt="logo"/>
        <Burger onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
          <FaBars/>
        </Burger>
        <Menu open={showBurgerMenu}>
          <MenuItem>
            <MenuItemLink>
              HOME
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              PROYECTOS
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              SOBRE MI
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>
              CONTACTO
            </MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </ContainerHeader>
  )
}

export default Header

export const ContainerHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: #0B0C10;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.img`
  margin-left: 0.5rem;
  width: 130px;
  padding: 0.3rem;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media(max-width: 960px){
    background-color: #0B0C10;
    position: absolute;
    top: 70px;
    left: ${({open}) => (open ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media(max-width: 960px){
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover{
    color: black;
    background-color: #66FCF1;
    transition: 0.5s all ease;
  }

  @media(max-width: 960px){
    width: 100%;
  }
`;

export const Burger = styled.div`
  display: none;
  height: 100%;

  @media(max-width: 960px){
    display: flex;
    align-items: center;
    cursor: pointer;

    svg{
      fill: #66FCF1;
      margin-right: 0.5rem;
      font-size: 2em;
    }
  }
`