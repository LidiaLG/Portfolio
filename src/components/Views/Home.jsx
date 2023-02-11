import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Title>
          <p className="presentationTitle">
            Hola,
            <br /> soy Lidia
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
  background-color: #0b0c10;
  z-index: -10;
  @media (max-width: 768px) {
    display: grid;
    place-items: center;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 17.5rem;
  height: 18rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
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
      width: 100%;
    }
  }
`;
