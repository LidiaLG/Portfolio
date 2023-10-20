import React from 'react'
import Home from './Views/Home'
import Proyectos from './Views/Proyectos'
import SobreMi from './Views/SobreMi'


const Layout = () => {
  return (
    <div>
      <Home/>
      <Proyectos/>
      <SobreMi/>
    </div>
  )
}

export default Layout