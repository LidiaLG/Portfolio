import React from 'react'
import Home from './Views/Home'
import Proyectos from './Views/Proyectos'
import SobreMi from './Views/SobreMi'
import Contacto from './Views/Contacto'


const Layout = () => {
  return (
    <div>
      <Home/>
      <Proyectos/>
      <SobreMi/>
      <Contacto/>
    </div>
  )
}

export default Layout