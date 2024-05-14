import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import FooterCom from './components/Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <FooterCom/>
    </div>
  )
}

export default Layout