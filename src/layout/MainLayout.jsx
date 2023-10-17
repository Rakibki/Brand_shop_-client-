import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../components/navber/Navber'
import Footer from '../components/footer/Footer'

const MainLayout = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
        <Navber />
            <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout