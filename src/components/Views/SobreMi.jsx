import React from 'react';
import aboutMePicture from '../../assets/aboutMePicture.jpg';
import styled from 'styled-components'

const SobreMi = () => {
  return (
    <>
      <Sections>
        <h1>SOBRE MI</h1>
      </Sections>
    <AboutMeContainer>
      <div className='containerImgandText'>
        <img className = "picture" src={aboutMePicture} alt='img'></img>
        <p>Soy Full-Stack developer, durante mis estudios y trabajos he adquirido habilidades de planificación, resolución de conflictos y trabajo en equipo con metodología Agile.
        Apasionada del arte y de crear algo desde 0.
        Hice un voluntariado de tres meses en Ecuador donde me reencontré y me propuse crecen en todos los ámbitos. </p>
      </div>
    </AboutMeContainer>
    </>
  )
}

export default SobreMi

export const AboutMeContainer = styled.div`
    background: #0B0C10;
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;

    .containerImgandText{
    width: 70%;
    height: 70%;
    margin: auto;
    margin-top: -20px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 3px #66FCF1;
    border-radius: 10px;
  }

  .picture{
      width: 12rem;
      border-radius: 10px;   
      margin-bottom: 2rem; 
      margin-top: 2rem;
  }

  p{
      width: 80%;
      font-size: 18px;
  }

  @media screen and (max-width: 768px) {
      p{
          font-size: 13px;
      }
  }
`;

export const Sections = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    padding: 100px;
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