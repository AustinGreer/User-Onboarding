import React, { useState, useEffect } from 'react'
import Form from './Form'
import * as yup from 'yup'
import formSchema from './Validation/formSchema'




//Setup Initial Values for Form
//initial values
const initialForm = {
  name: '',
  email: '',
  password: '',
  tos: false
}

// initial errors
const initialErrors = {
  name: '',
  email: '',
  password: '',
  tos: false
}

//initial button
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState([]) // users
  const [formValues, setFormValues] = useState(initialForm) // values
  const [formErrors, setFormErrors] = useState(initialErrors) // errors
  const [disabled, setDisabled] = useState(initialDisabled) // button set to disabled
  
  

  const inputHandler = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  return (
    <div className="App">
      <Form
        values={formValues}
        errors={formErrors}
        disabled={disabled}
        inputHandler={inputHandler}
      />
    </div>
  );
}

export default App;
