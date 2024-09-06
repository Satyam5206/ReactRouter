import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx'
 
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './componantes/Home.jsx'
import About from './componantes/About.jsx'
import Contact from './componantes/Contact.jsx'
// import Github from './componantes/Github.jsx'
// import logIn from './componantes/logIn.jsx'
// import Chatbott from './componantes/Chatbott.jsx'
// import Body from './componantes/Main/Body.jsx'
// import Sidebar from './componantes/Main/Sidebar.jsx'
import Bodyy from './componantes/main/Bodyy.jsx'
import Sidebar from './componantes/Sidebar/Sidebar.jsx'


 

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"Contact",
        element:<Contact />
      },
      {
        path:"about",
        element:<About />
      },
      // {
      //   path:"logIn",
      //   element:<logIn />
      // },
       
      {
        path:"Bodyy",
        element:<Bodyy />
      },
      {
        path:"Sidebar",
        element:<Sidebar />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
