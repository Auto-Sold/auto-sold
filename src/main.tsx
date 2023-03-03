import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AnnounceProvider from './contexts/AnnounceContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <AnnounceProvider>
        <App />
    </AnnounceProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
