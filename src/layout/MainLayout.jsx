import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../components/navber/Navber'
import Footer from '../components/footer/Footer'
import { authContext } from '../providers/AuthProvider'

const MainLayout = () => {
  const {isDark} = useContext(authContext)

  return (
    <div className={`max-w-[1400px] ${isDark ? "bg-black" : "bg-white"} mx-auto`}>
        <Navber />
            <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout