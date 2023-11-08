import React from 'react';
import aboutMePicture from '../../assets/photo-profile.jpg';
import gallery5 from '../../assets/gallery5.jpg'
import gallery4 from '../../assets/gallery4.jpg'
import styled from 'styled-components'

const SobreMi = () => {
  return (
    <>
      <Sections id="sobremi">
        <h1>SOBRE MI</h1>
      </Sections>
    <AboutMeContainer>
      <div className="infoContainer">
        <p className="title"> Soy una apasionada de crear cosas que puedan ser útiles y bonitas.</p>
        <div className="imgTextContainer">
          <div className="infoItem">
            <img src={aboutMePicture} alt="picture about me" />
          </div>
          <div className="infoItem">
            <p>Desde siempre me ha gustado el arte en sus múltiples facetas como pintar, dibujar, escribir, hacer fotografías...</p>
          </div>
          <div className="infoItem">
            <p>He descubierto el mundo de la programación. Y es un mundo fascinante en el que tienes libertad de crear lo que quieras, el fin está en tu conocimiento e imaginación. En el camino del apendizaje de los diferentes lenguajes de programación y herramientas he aprendido de mí, que soy una persona resiliente. Me gusta trabajar en equipo y aprender de cada persona y, sobretodo, descubrirme a mí misma.</p>
          </div>
          <div className="infoItem">
            <img src={gallery4} alt="picture nature" />
          </div>
          <div className="infoItemFull">
            <img src={gallery5} alt="picture graffity" />
          </div>
          <div className="infoItemFull">
            <p>En mi tiempo libre me gusta estar en la naturaleza, sobretodo cerca del mar. Soy fan de descubrir una buena película, serie o libro, y sobretodo compartir estos momentos con la familia y amig@s...</p>
          </div>
        </div>
      </div>
    </AboutMeContainer>
    </>
  )
}

export default SobreMi

export const AboutMeContainer = styled.div`
    background: #0b0c10;
    color: #fff;
    text-align: center;
    padding: 20px;

    .infoContainer {
      max-width: 700px;
      margin: 0 auto;
      margin-bottom: 2em;
    }

    .title {
      margin-bottom: 2rem;
      color: #fff;
      text-align: left;
    }

.imgTextContainer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1em;
  align-items: center;
  justify-content: center;

  .infoItem {
    text-align: center;
    
  }

  .infoItemFull {
    grid-column: span 2;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    .imgTextContainer {
      display: block;
    }

    .infoItemFull {
      grid-column: span 1;
    }
  }

  @media screen and (max-width: 480px) {
    .infoContainer{
      max-width: 50%;
    }
    img {
      width: 80%;
    }

    p {
      font-size: .9em;
      text-align: center;
    }
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