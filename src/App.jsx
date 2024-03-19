import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Header />} />
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
