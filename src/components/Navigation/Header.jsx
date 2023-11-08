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

  //estilo links navbar
  const [activeLink, setActiveLink] = useState("Proyectos");



  return (
    <ContainerHeader>
      <Wrapper>
        <a href="#home"><LogoContainer src={Logo} alt="logo"/></a>
        <Burger onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
          {showBurgerMenu ? <FaTimes/> : <FaBars/>}
        </Burger>
        
        <Menu open={showBurgerMenu}>
          <MenuItem className={activeLink === "Proyectos" ? "active" : ""}>
            <MenuItemLink 
              href="#proyectos" 
              onClick={() => {
                setShowBurgerMenu(!showBurgerMenu);
                setActiveLink("Proyectos");
            }}>
              PROYECTOS
            </MenuItemLink>
          </MenuItem>
          <MenuItem className={activeLink === "SobreMi" ? "active" : ""}>
            <MenuItemLink 
              href="#sobremi"
              onClick={() => {
                setShowBurgerMenu(!showBurgerMenu);
                setActiveLink("SobreMi");
              }}
            >
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
  position: relative;
`;

export const LogoContainer = styled.img`
  margin-left: 0.5rem;
  width: 130px;
  padding: 0.3rem;
  z-index: 10;
`;

export const Menu = styled.ul`
  height: 50%;
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
  list-style: none;
  background-color: rgba(242, 242, 242, .05);
  border-radius: 100vmax;
  border: 1px solid rgba(242, 242, 242, .1);
  backdrop-filter: blur(15px);


  @media(max-width: 768px){
    background-color: #0B0C10;
    position: absolute;
    left: ${({open}) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    border-radius: 0;
    margin-top: 0;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  &.active {
    background-color: rgba(242, 242, 242, .05);
    border-radius: 100vmax;
  }
  
  @media(max-width: 768px){
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1) {
      margin-top: 5rem;
    }
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