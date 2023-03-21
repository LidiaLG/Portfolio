import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaDownload} from "react-icons/fa";


const Contacto = () => {
  return (
    <>
      <Sections id="contacto">
        <h1>CONTACTO</h1>
      </Sections>
      <ContactContainer>
        <ContainerMedia>
          <h1>Contactame:</h1>
          <ContactMedias>
            <a href="https://github.com/LidiaLG" className='linksMedias' target="_blank" rel="noopener noreferrer"><FaGithub className='icons'/></a>
            <a href="https://www.linkedin.com/in/lidialg/" className='linksMedias' target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='icons'/></a>
            <a href="mailto:lidialg.dev@gmail.com" className='linksMedias' target="_blank" rel="noopener noreferrer"><FaEnvelope className='icons'/></a>
            <a href="./CVFullStackdeveloper.pdf" className='linksMedias' rel="noopener noreferrer" download="CVFullStackLidia"><FaDownload className='icons'/></a>
          </ContactMedias>
          <p>Se acepta feedback para poder mejorar. Gracias!</p>
        </ContainerMedia>
      </ContactContainer>
    </>
  )
}

export default Contacto


export const Sections = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    padding: 150px;
    background: #0B0C10;

h1{
  color: #fffbf1;
  text-shadow: 0 20px 25px rgba(0, 0, 0, 0.5), 0 40px 60px rgba(0, 0, 0, 0.1);
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: -3px;
  margin: 0;
  position: absolute;
  
}

h1:before,
h1:after {
  content: '';
  padding: .9em .4em;
  position: absolute;
  left: 50%;
  width: 100%;
  top: 50%;
  display: block;
  border: 15px solid #66FCF1;
  transform: translateX(-50%) translateY(-50%) rotate(0deg);
  animation: 10s infinite alternate ease-in-out tipsy;
}

h1:before {
  border-color: #66FCF1 #66FCF1 rgba(102, 252, 241, 0.48) rgba(102, 252, 241, 0.48);
  z-index: -1;
}

h1:after {
  border-color: rgba(102, 252, 241, 0.48) rgba(102, 252, 241, 0.48) #66FCF1 #66FCF1;
  box-shadow: 25px 25px 25px rgba(0, 0, 0, 0.5);
}

@keyframes tipsy {
  from {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}
`;

export const ContactContainer = styled.div`
    background: #0B0C10;
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
`;

export const ContainerMedia = styled.div`
    width: 70%;
    height: 70%;
    margin: auto;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 3px #66FCF1;
    border-radius: 10px;
    position: relative;

    h1{
      margin-top: 1.2em;
      font-size: 2.2em;
      padding: 0.5em;
    }

    p{  
      position: absolute;
      bottom: 1.2em;
      padding: 1em;
      text-align: center;
      font-size: 1.2em;
    }
`;

export const ContactMedias = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  min-width: 400px;
  justify-content: space-between;
  align-items: center;

  a{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    color: #000;
    background: #66FCF1;
    text-decoration: none;
    overflow: hidden;
    font-size: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .linksMedias:hover{
      background: black;
      color: white;
      box-shadow: 0px 1px 10px rgba(248, 247, 247, 0.4);
  }

  @media (max-width: 768px){
    min-width: 200px;
    a{
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
    }
  }
`;