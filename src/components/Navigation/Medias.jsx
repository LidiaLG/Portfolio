import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaDownload, FaPlus} from "react-icons/fa";
import styled from 'styled-components';

const Medias = () => {
    return (
        <MediaContainer>
            <input type="checkbox" id="btnPlus"></input>
            <div className='btnPlus'>
                <label className="containerBtnPlus" for="btnPlus"><FaPlus className='iconPlus'/></label>
            </div>
            <div className='medias'>
                <a href="https://github.com/LidiaLG" className='linksMedias' target="_blank" rel="noopener noreferrer"><FaGithub className='icons'/></a>
                <a href="https://www.linkedin.com/in/lidialg/" className='linksMedias' target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='icons'/></a>
                <a href="mailto:lidialg.dev@gmail.com" className='linksMedias' target="_blank" rel="noopener noreferrer"><FaEnvelope className='icons'/></a>
                <a href="./CVFullStackdeveloper.pdf" className='linksMedias' rel="noopener noreferrer" download="CVFullStackLidia"><FaDownload className='icons'/></a>
            </div>
            
        </MediaContainer>
    )
}

export default Medias

export const MediaContainer = styled.div`
    width: 50px;
    padding: 10px;
    margin-right: 3.5rem;

    #btnPlus{
    display: none;
    }

    .btnPlus{
        display: flex;
        align-items: center;
        height: 55px;
        width: 55px;
        background: #66FCF1;
        border-radius: 50%;
    }

    #btnPlus:checked~ .btnPlus .iconPlus{
        transform: rotate(137deg);
    }

    .containerBtnPlus{
        width: 100%;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }

    svg{
        width: 25px;
        height: 25px;
    }

    .linksMedias{
        width: 40px;
        height: 40px;
    }

    .medias .linksMedias{
        display: block;
        text-decoration: none;
        background: #66FCF1;
        color: black;
        border-radius: 50%;
        transition: all 500ms ease;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .medias .linksMedias:hover{
        background: black;
        color: white;
        box-shadow: 0px 1px 10px rgba(248, 247, 247, 0.4);
    }

    .medias .linksMedias{
        margin-bottom: -16px;
        margin-top: 15px;
        opacity: 0;
        visibility: hidden;
    }

    #btnPlus:checked~ .medias .linksMedias{
        margin-bottom: 10px;
        opacity: 1;
        visibility: visible;
    }

    

@media (max-width: 768px){
        left: 15px;
        
    .btnPlus{
        width: 40px;
        height: 40px;
    }
}

    @media(min-width: 768px){
        
        .linksMedias{
            width: 55px;
            height: 55px;
        }
    }
`;