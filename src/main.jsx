import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {  HelmetProvider } from 'react-helmet-async';

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
<QueryClientProvider client={client}>
<AuthProvider>
    <RouterProvider router={routes}/>
    </AuthProvider>
</QueryClientProvider>
</HelmetProvider>
    <Toaster />
  </React.StrictMode>,
)
