import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
 
  <React.StrictMode>
     <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>  
  </React.StrictMode>,
)