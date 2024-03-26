import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SectionHome from './components/SectionHome';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path="/" element={<SectionHome/>} />

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
