import React from 'react';
import Title from '../Utils/Title';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <Title/>
    </HomeContainer>
  )
}

export default Home

export const HomeContainer = styled.div`
  height: 100vh;
  background-color: #0B0C10;
  @media (max-width: 768px){
    display: grid;
    place-items: center;
  }
`;