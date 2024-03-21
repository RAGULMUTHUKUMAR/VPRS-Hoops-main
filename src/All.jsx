import React from 'react'
import App from './App'
import Registrations from "./Registrations/Registrations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const All = () => {
  return (
    <div>
      <ToastContainer style={{ left: "60" }}/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/registration' element={<Registrations/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default All
