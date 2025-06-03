import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('bg-light-blue-gradient');
}); // Assurer que le body a la classe ayant la variable du gradiant après le chargement du DOM

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
