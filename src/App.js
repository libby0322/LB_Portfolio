import React from 'react'
import Main from './Main/Main';
import Top, { TopBar } from './Main/Top';
import About from './Page/About';
import Contact from './Page/Contact';
import Features from './Page/Features';
import Portfolio from './Page/Portfolio';
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <>
   <BrowserRouter >
   <Routes>
    <Route path="/*" element={<Top />}></Route>
    <Route path='/main' element={<Main />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/features" element={<Features />}></Route>
    <Route path="/portfolio" element={<Portfolio />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App