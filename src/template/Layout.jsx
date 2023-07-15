import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastProvider } from '../context/ToastContext'
import { AuthProvider } from '../context/AuthContext'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <Navbar/>
          <Outlet/>
        <Footer/>
      </ToastProvider>
    </AuthProvider>
  )
}

export default Layout
