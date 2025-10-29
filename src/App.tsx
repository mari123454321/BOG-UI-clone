import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPersonal from "./pages/LoginPersonal"
import LoginBusiness from './pages/LoginBusiness';
import LoginBusinessManager from './pages/LoginBussinessManager';
import PageDoesNotExist from './pages/PageDoesNotExist';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={"/personal"} replace />} />
      <Route path='/personal' element={<LoginPersonal/>} />
      <Route path='/business' element={<LoginBusiness/>} />
      <Route path='/manager' element={<LoginBusinessManager/>} />
      <Route path='/PageDoesNotExist' element={<PageDoesNotExist/>}/>
    </Routes>
  )
}

export default App
