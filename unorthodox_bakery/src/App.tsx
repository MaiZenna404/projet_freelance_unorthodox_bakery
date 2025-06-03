import './App.css'
{ /* Import Components */}
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import Services from './components/Events'
import Pro from './components/Pro'

import ContactForm from './components/form';
import Footer from './components/Footer'
function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <Pro />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
