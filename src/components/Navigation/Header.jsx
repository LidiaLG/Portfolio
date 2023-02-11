import React, {useState} from 'react';
import styled from 'styled-components';
import Logo from '../../assets/Logo.svg';
import {FaBars, FaTimes} from 'react-icons/fa';



const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <ContainerHeader>
      <Wrapper>
        <LogoContainer src={Logo} alt="logo"/>
        <Burger onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
          {showBurgerMenu ? <FaTimes/> : <FaBars/>}
        </Burger>
        <Menu open={showBurgerMenu}>
          <MenuItem>
            <MenuItemLink href="/home"onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
              HOME
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="/proyectos" onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
              PROYECTOS
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="/sobremi" onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
              SOBRE MI
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="/contacto" onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
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
  position: fixed;
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

  @media(max-width: 768px){
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
  @media(max-width: 768px){
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
  text-decoration: none;

  &:hover{
    color: #66FCF1;
    filter: drop-shadow(0 0 20px #66FCF1) drop-shadow(0 0 50px #66FCF1);
    transition: 0.5s all ease;
    backdrop-filter: blur(10px);
  }

  @media(max-width: 768px){
    width: 100%;
  }
`;

export const Burger = styled.div`
  display: none;
  height: 100%;

  @media(max-width: 768px){
    display: flex;
    align-items: center;
    cursor: pointer;

    svg{
      fill: #66FCF1;
      margin-right: 1rem;
      font-size: 3em;
    }
  }
`