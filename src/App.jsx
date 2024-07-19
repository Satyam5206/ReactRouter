import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componantes/Header'
import Footer from './componantes/Footer'
import Home from './componantes/Home'
 
import { createBrowserRouter } from 'react-router-dom'
 


function App() {
   const [count,setcount]=useState(0)

  return (
    <>
    <Header/>
    <Footer/>
    <Home/>
     <h1 className='bg-green-400  p-4'> Hii i am going to learn react Router</h1>
    </>
  )
}

export default App
