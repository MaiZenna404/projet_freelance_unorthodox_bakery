import './App.css'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import Events from './components/Events'
import Pro from './components/Pro'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

{ /* Import UI components and styles */ }
import { Toaster } from 'sonner'
function App() {
  return (
    <>
      <Toaster position="top-center" richColors/>
      <NavBar />
      <HeroSection />
      <Events />
      <Pro />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
