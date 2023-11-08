import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <HomeContainer id="home">
        <Title>
          <p className="presentationTitle">
            Hola, soy Lidia
          </p>
          <span className="animationTitle" data-text="FullStack Developer">
            FullStack Developer
          </span>
        </Title>
      </HomeContainer>
    </>
  );
};

export default Home;

export const HomeContainer = styled.div`
  height: 100vh;
  background-image: url('/background_picture2.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: grid;
    place-items: center;
    background-position: right;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 17.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.48);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.7px);
  -webkit-backdrop-filter: blur(7.7px);

  @media (min-width: 768px) {
    width: 23rem;
    
    margin-left: 2rem;
    font-size: 1em;
    
  }
  
  .presentationTitle {
    color: white;
    font-size: 2em;
  }
  .animationTitle {
    position: relative;
    font-size: 3em;
    color: #222;
  }

  .animationTitle::before {
    content: attr(data-text);
    position: absolute;
    color: #66fcf1;
    width: 200px;
    overflow: hidden;
    white-space: wrap;
    border-right: 4px solid #66fcf1;
    animation: animate 8s linear infinite;
    filter: drop-shadow(0 0 20px #66fcf1) drop-shadow(0 0 50px #66fcf1);
  }

  @keyframes animate {
    0%,
    10%,
    100% {
      width: 0;
    }

    70%,
    90% {
      width: 75%;
    }
  }
`;
