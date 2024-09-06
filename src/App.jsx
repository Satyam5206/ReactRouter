import { useState } from 'react'
import './App.css'
import Header from './componantes/Header'
// import Footer from './componantes/Footer'
import Home from './componantes/Home'
// import logIn from './componantes/logIn'
import Chatbott from './componantes/Chatbott'
// import Sidebar from './componantes/Main/Sidebar'
// import Body from './componantes/Main/Body'


 
// import { createBrowserRouter } from 'react-router-dom'
 


function App() {
  //  const [count,setcount]=useState(0)

  return (
    <>
    
    <Header/>
    {/* <Footer/> */}
    <Home/>
    <Chatbott/>
     <h1 className='bg-green-400  p-4'> Hii i am going to learn react Router</h1>
    </>
  )
}

export default App
