import { useState } from 'react'

import {Routes,Route} from "react-router-dom"
import './App.css'
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Navbar from './components/Navbar'
function App() {
  

  return (
    <>
      <div>
    <Navbar/>
    <Routes>
          <Route exact path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="edit/:id" element={<Update />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
