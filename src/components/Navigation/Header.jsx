import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Logo from '../../assets/Logo.svg';
import {FaBars, FaTimes} from 'react-icons/fa';
import Medias from './Medias';




const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el estado del ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregamos un event listener para rastrear el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const isMobileView = window.innerWidth <= 768;

  return (
    <ContainerHeader>
      <Wrapper>
        <a href="#home"><LogoContainer src={Logo} alt="logo"/></a>
        <Burger onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
          {showBurgerMenu ? <FaTimes/> : <FaBars/>}
        </Burger>
        
        <Menu open={showBurgerMenu}>
          <MenuItem>
            <MenuItemLink href="#proyectos" onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
              PROYECTOS
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="#sobremi" onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
              SOBRE MI
            </MenuItemLink>
          </MenuItem>
          {isMobileView && ( // Renderizar Medias solo en vista móvil
            <MenuItem>
              <Medias />
            </MenuItem>
          )}
        </Menu>
        {!isMobileView && ( // Renderizar Medias fuera del menú en vista de escritorio
          <Medias />
        )}
      </Wrapper>
    </ContainerHeader>
  )
}

export default Header

export const ContainerHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 10;
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
  z-index: 10;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  background-color: red;

  @media(max-width: 768px){
    background-color: #0B0C10;
    position: absolute;
    left: ${({open}) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
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
    
  }

  @media(max-width: 768px){
    width: 100%;
  }
`;

export const Burger = styled.div`
  display: none;
  height: 100%;
  z-index: 5;

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