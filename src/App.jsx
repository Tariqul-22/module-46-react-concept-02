

import './App.css'
import ControlStateForm from './Components/Control State Form/ControlStateForm'
import SimpleForm from './Components/Form/SimpleForm'
import Grandpa from './Components/Grandpa/Grandpa'
import RefForm from './Components/RefForm/RefForm'
import ReusableForm from './Components/Reuseable Form/ReusableForm'

function App() {

  const handleSubmitForm = (e) =>{
    console.log('submit form :',e);
  }

  const handleUpdateForm = (e) =>{
    console.log('update form :',e);
  }

  return (
    <>

      <h1>Vite + React</h1>
      <Grandpa></Grandpa>

      <SimpleForm></SimpleForm>
      <ControlStateForm></ControlStateForm>
      <RefForm></RefForm>
      <ReusableForm
        title='Submit Form'
        handleForm={handleSubmitForm}>
          <div>
            <p>please fillup the form</p>
          </div>
        </ReusableForm>
      <ReusableForm
        title='Update Form'
        submitBtnText='Update'
        handleForm={handleUpdateForm}>
          <div>
            <p>please Update the form</p>
          </div>
        </ReusableForm>
    </>
  )
}

export default App
