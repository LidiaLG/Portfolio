import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../components/Views/Home';
import Proyectos from '../components/Views/Proyectos';
import SobreMi from '../components/Views/SobreMi';
import Layout from '../components/Layout';
import Contacto from '../components/Views/Contacto';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/proyectos" element={<Proyectos/>}/>
                <Route path="/sobremi" element={<SobreMi/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router