import React from 'react';
import styled from 'styled-components';
import memoramaPicture from '../../assets/memoramaPicture.jpg'

const Proyectos = () => {
  return (
    <>
      <Sections>
        <h1>PROYECTOS</h1>
      </Sections>
      <ProyectosContainer>
        <div className='card'>
          <div className='backgroundCard'>
            <div className='border'></div>
              <h3>Juego memorama</h3>
              <img className='imgProjects' src={memoramaPicture} />
            <div className='btnContainer'>
              <a className='btnProject' href="">Demo</a>
              <a className='btnProject' href="">Repo</a>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='backgroundCard'>
            <div className='border'></div>
              <h3>Juego memorama</h3>
              <img className='imgProjects' src={memoramaPicture} />
            <div className='btnContainer'>
              <a className='btnProject' href="">Demo</a>
              <a className='btnProject' href="">Repo</a>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='backgroundCard'>
            <div className='border'></div>
              <h3>Juego memorama</h3>
              <img className='imgProjects' src={memoramaPicture} />
            <div className='btnContainer'>
              <a className='btnProject' href="">Demo</a>
              <a className='btnProject' href="">Repo</a>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='backgroundCard'>
            <div className='border'></div>
              <h3>Juego memorama</h3>
              <img className='imgProjects' src={memoramaPicture} />
            <div className='btnContainer'>
              <a className='btnProject' href="">Demo</a>
              <a className='btnProject' href="">Repo</a>
            </div>
          </div>
        </div>
      </ProyectosContainer>
    </>
  )
}

export default Proyectos;



export const ProyectosContainer = styled.div`
    background: #0B0C10;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

  h3{
    text-transform: uppercase;
    
  }

  .card{
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    .backgroundCard{
      max-width: 300px;
      color: #fff;
      padding: 150px 0px 50px 40px;
      background: rgba(102, 252, 241, 0.48);
      border-radius: 10px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(15.6px);
      -webkit-backdrop-filter: blur(15.6px);
      border: 1px solid rgba(102, 252, 241, 1);
    }
  }

  .imgProjects{
    width: 20rem;
    height: 15rem;
    border: 4px solid white;
  }

  .btnContainer{
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    
    .btnProject{
      text-decoration: none;
      color: #0B0C10;
      background-color: #66FCF1;
      width: 80px;
      text-align: center;
      padding: 6px;
      border-radius: 10px;
      cursor: pointer;
    }
    
    .btnProject:hover{
      background: black;
        color: white;
        box-shadow: 0px 1px 10px rgba(248, 247, 247, 0.4);
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