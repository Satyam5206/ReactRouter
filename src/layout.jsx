import React from 'react'
import Header from './componantes/Header'
// import Footer from './componantes/Footer'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    {/* <Footer/> */}
    
    </>
  )
}

export default Layout