import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Simulated Authentication
if (!localStorage.getItem('authToken')) {
  localStorage.setItem('authToken', 'dummy-token');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
