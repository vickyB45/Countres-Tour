import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import LoginForm from './component/LoginForm'
import AboutCountry from './pages/AboutCountry'
import ScrollToTop from './component/ScrollToTop'

export default function App2(props) {

  const [isDarkMode, setIsDarkMode] =useState(true)

const handleClick =()=>{
  setIsDarkMode(!isDarkMode)
   if(isDarkMode){
    document.body.style.backgroundColor = '#13182b'
    document.body.style.color = '#e6e6e6'
  }
  else{
     document.body.style.backgroundColor = '#e6e6e6'
     document.body.style.color = '#13182b'

   }
}


  return (
    <div >
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar click={handleClick} handleLogOut={props.handleLogOut} />
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detailsAboutCountry' element={<AboutCountry/>}/>
          <Route path='/country' element={<Country bg={!isDarkMode? "neutral-800":"white"} text={!isDarkMode? "white":"black"}/>}/>
          <Route path='/contact' element={<Contact bg={ !isDarkMode? "neutral-300":"white" }/>}/>
          <Route path='/form' element={<LoginForm/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}
