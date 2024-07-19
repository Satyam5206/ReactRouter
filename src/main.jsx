import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx'
 
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './componantes/Home.jsx'
import About from './componantes/About.jsx'
import Contact from './componantes/Contact.jsx'
import Github from './componantes/Github.jsx'
import logIn from './componantes/logIn.jsx'

 

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
      {
        path:"logIn",
        element:<logIn />
      },
      {
        path:"Github",
        element:<Github />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
