import React from 'react';
import styled from 'styled-components';
import babyYoda from './../../assets/babyyoda.png';
import handYoda from './../../assets/mano.png';


const Footer = () => {
  return (
    <FooterContainer>
        <a href="mailto:lidialg.dev@gmail.com" target="_blank" rel="noopener noreferrer">Contactame</a>
        <div className="boxYoda">
          <img class="btn-hand" src={handYoda} alt="hand" />
          <img class="btn-body" src={babyYoda} alt="yoda" />

        </div>
    </FooterContainer>
  )
}

export default Footer

export const FooterContainer = styled.div`
    background: #0B0C10;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #696868;
    padding: 2em;
    border-top: solid 1px #66FCF1;

    a {
        color: #66FCF1;
        font-size: 1.5rem;
        position: relative;
        text-decoration: none;
        border: solid 1px #66FCF1;
        padding: 1rem;
        border-radius: 5rem;
        box-shadow: 0px 6px 0px #66FCF1;
        transition: transform 0.3s ease;
    }

    a:hover {
      transform: translateY(5px);
      box-shadow: 0px 0px 0px #66FCF1;
    }

    .boxYoda{
      position: absolute;
      margin-bottom: 2.5rem;
      margin-left: 7rem;
    }

    .btn-body {
      width: 6rem;
      position: absolute;
      margin-left: 3rem;
    }

    .btn-hand {
      width: 2rem;
      margin-top: 1.6rem;
      margin-left: 2.65rem;
      position: absolute;
      transition: transform 0.3s ease;
    }

    a:hover + .boxYoda .btn-hand {
      transform: rotate(-20deg) translateY(5px);
    }

    @media screen and (max-width: 768px){
      a{
        font-size: .8rem;
      }

      .boxYoda {
        margin-left: 3rem;
      }
    }
`;