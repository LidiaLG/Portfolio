import React from 'react';
import styled from 'styled-components';

const Title = () => {
  return (
    <>
    <TitleContainer>
      <p className='presentationTitle'>Hola,<br/> soy Lidia</p>
      <span className='animationTitle' data-text="FullStack Develop">FullStack Develop</span>
    </TitleContainer>
    </>
  )
}

export default Title

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 18rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(5px);
  .presentationTitle{
    color: white;
    font-size: 2em;
  }
  .animationTitle{
    position: relative;
    font-size: 3em;
    color: #222;
}

.animationTitle::before{
    content: attr(data-text);
    position: absolute;
    color: #66FCF1;
    width: 200px;
    overflow: hidden;
    white-space: wrap;
    border-right: 4px solid #66FCF1;
    animation: animate 8s linear infinite;
    filter: drop-shadow(0 0 20px #66FCF1) drop-shadow(0 0 50px #66FCF1);
}

@keyframes animate{
    0%,10%,100%{
    width: 0;
    }
    
    70%,90%{
    width: 100%;
    }
}
`