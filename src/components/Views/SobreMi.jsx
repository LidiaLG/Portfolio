import React from 'react';
import aboutMePicture from '../../assets/aboutMePicture.jpg';
import styled from 'styled-components'

const SobreMi = () => {
  return (
    <>
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