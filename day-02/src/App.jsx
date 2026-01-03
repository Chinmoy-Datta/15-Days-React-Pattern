import ControlledContactForm from './controlled/ControlledContactForm'
import UncontrolledContactForm from './uncontrolled/UncontrolledContactForm'
import UncontrolledContactFormNoRef from './uncontrolled/UncontrolledContactFormNoRef'
import "./App.css"

function App() {

  return (
    <>
    <ControlledContactForm/>
    <UncontrolledContactForm/>
    <UncontrolledContactFormNoRef/>
    </>
  )
}

export default App
