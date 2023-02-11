import React from 'react';
import styled from 'styled-components';
import memoramaPicture from '../../assets/memoramaPicture.jpg'

const Proyectos = () => {
  return (
    <>
      <ProyectosContainer>
        <div class="card-column column-0">
          <div class="card card-color-0">
            <div class="border"></div>
              <img src={memoramaPicture} />
              <h3>Juego de memorama</h3>
          </div>
              <div className='btnContainer'>
                <a className='btnProject' href="">Demo</a>
                <a className='btnProject' href="">Repo</a>
              </div>
        </div>
      </ProyectosContainer>
    </>
  )
}

export default Proyectos

export const ProyectosContainer = styled.div`
    background: #0B0C10;
    width: 100%;
    height: 100vh;
    display: grid;
    place-content: center;

  .card-column {
  width: 100%;
  padding: 4%;
  box-sizing: border-box;
}

.card {
  width: 100%;
  position: relative;
  color: #fff;
  padding: 150px 0px 50px 40px;
  background: rgba(102, 252, 241, 0.48);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15.6px);
  -webkit-backdrop-filter: blur(15.6px);
  border: 1px solid rgba(102, 252, 241, 1);
}

.border {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 6px;
  border: 1px solid #fff;
  opacity: 0.5;
  left: -6px;
  top: -6px;
}

h3{
  position: relative;
  right: 220px;
  font-size: 20px;
  text-align: center;
}

.card > img {
  width: 20rem;
  height: 15rem;
  position: absolute;
  top: -35%;
  left: -56%;
  border: 4px solid white;
}

.btnContainer{
  background-color: red;
  display: flex;
  justify-content: center;
  position: relative;
  
  z-index: 5;
}

.btnProject{
  text-decoration: none;
  background-color: white;
  padding: 10px;
  margin-right: 20px;
  color: black;
  border-radius: 10px;
  width: 100px;
}

`;