import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router/Router.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)
