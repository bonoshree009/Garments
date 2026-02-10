import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Providers/AuthProvider.jsx'
import { RouterProvider } from 'react-router'
import  Router from './Routes/Router.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider> <RouterProvider router={Router} /></AuthProvider>
  </StrictMode>
)
