import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import Routes from './routes/Routes.jsx';
import AuthProvider from './provider/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter> 
    </AuthProvider>   
  </StrictMode>,
)
