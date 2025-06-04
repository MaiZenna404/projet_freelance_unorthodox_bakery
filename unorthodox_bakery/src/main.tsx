import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import ContactForm from './components/form.tsx';

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('bg-light-blue-gradient');
}); // Assurer que le body a la classe ayant la variable du gradiant après le chargement du DOM

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ContactForm />
    </BrowserRouter>
  </StrictMode>
)
