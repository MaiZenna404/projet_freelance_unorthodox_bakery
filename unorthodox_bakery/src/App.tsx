import './App.css'
{ /* Import Components */}
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import Services from './components/Events'
import Pro from './components/Pro'

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <Pro />
    </>
  )
}

export default App
