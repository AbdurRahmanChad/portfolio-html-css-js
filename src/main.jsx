import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import About from "./Pages/About/About.jsx";
import Skills from "./Pages/Skills/Skills.jsx";
import Portfolio from "./Pages/Portfolio/Portfolio.jsx";
import Resume from "./Pages/Resume/Resume.jsx";
import Contact from "./Pages/Contact/Contact.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/skills",
        element: <Skills/>,
      },
      {
        path: "/portfolio",
        element: <Portfolio/>,
      },
      {
        path: "/resume",
        element: <Resume/>,
      },      
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
