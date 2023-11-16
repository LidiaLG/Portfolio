import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaEye } from 'react-icons/fa';
import projectsData from '../data/data.json';


const Proyectos = () => {
    const projectsJson = projectsData;

    const [projects, setProjects] = useState(projectsData);
    const [filter, setFilter] = useState('All');

    const handleFilter = (type) => {
      if(type === 'All') {
        setProjects(projectsJson);
      } else {
        const filteredProjects = projectsJson.filter(project => project.type === type);
        setProjects(filteredProjects);
      }
      setFilter(type);
    }
  return (
    <>
      <Sections id='proyectos'>
        <h1>PROYECTOS</h1>
      </Sections>
      <FiltersContainer>
        <button className='btnFilters' onClick={() => handleFilter('All')}>All</button>
        <button className='btnFilters' onClick={() => handleFilter('FullStack')}>Fullstack</button>
        <button className='btnFilters' onClick={() => handleFilter('Backend')}>Backend</button>
        <button className='btnFilters' onClick={() => handleFilter('Frontend')}>Frontend</button>
      </FiltersContainer>
      <ProyectosContainer>
        {projects.map(project => (
          <Card key={project.id}>
            <img className='imgProjects' src={project.imgUrl} alt={project.name}/>
            <h3 className='titleProjects'>{project.name}</h3>
            <p className='paraphProjects'>{project.skills}</p>
            <div className='btnContainer'>
              <a className='btnProject' href={project.demo} target="_blank"><FaEye /></a>
              <a className='btnProject' href={project.repo} target="_blank"><FaGithub/></a>
            </div>
          </Card>

        ))}
      </ProyectosContainer>
    </>
  )
}

export default Proyectos;


export const FiltersContainer = styled.div `
    background: #0B0C10;
    display: flex;
    justify-content: center;
    align-items: center;

    .btnFilters {
      text-transform: uppercase;
      margin: 1rem;
      padding: .5rem;
      width: 6rem;
      border-radius: .5rem;
      background-color: #66FCF1;
      border: 1px solid rgba(102, 252, 241, 1);
    }    

    .btnFilters:hover {
      background: black;
      color: white;
      box-shadow: 0px 1px 10px rgba(248, 247, 247, 0.4);
    }

    @media(max-width: 768px){
      flex-wrap: wrap;
    }
`;

export const ProyectosContainer = styled.div`
    background: #0B0C10;
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(
        18em,
        1fr
      )
    );
    gap: 1em;
    padding: 2em;
    justify-items: center;

    @media(max-width: 560px){
      justify-items: center;
    }
`;

export const Card = styled.div `
    max-width: 20em;
    width: 17rem;
    padding: 1rem;
    color: #fff;
    background: rgba(102, 252, 241, 0.48);
    border-radius: 10px;
    backdrop-filter: blur(15.6px);
    border: 1px solid rgba(102, 252, 241, 1);
    display: flex;
    flex-direction: column;

    .imgProjects{
    height: 15rem;
    border: 4px solid white;
    object-fit: fill;
    }

    .titleProjects, .paraphProjects{
      text-transform: uppercase;
      margin-top: 1em;
      height: 2rem;
    }

    svg{
      font-size: 1.5em;
    }

    .btnContainer{
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }
      .btnProject{
        text-decoration: none;
        color: #0B0C10;
        background-color: #66FCF1;
        width: 80px;
        display: flex;
        justify-content: center;
        padding: 6px;
        border-radius: 10px;
        cursor: pointer;
      }
      
      .btnProject:hover{
        background: black;
          color: white;
          box-shadow: 0px 1px 10px rgba(248, 247, 247, 0.4);
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