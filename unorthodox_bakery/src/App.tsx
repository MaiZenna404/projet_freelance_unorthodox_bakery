import './App.css'
import { Button} from './components/ui/button'
import { ContactForm } from "./components/ButtonMail"



function App() {

  return (
    <>
      <h1 className='text-red-800 font-semibold text-3xl'>TEST</h1>
      <Button variant='destructive'>Test</Button>
      <ContactForm />

    </>
  )
}

export default App
