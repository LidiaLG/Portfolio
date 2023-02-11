import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../components/Views/Home';
import Proyectos from '../components/Views/Proyectos';
import Layout from '../components/Layout';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/proyectos" element={<Proyectos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router