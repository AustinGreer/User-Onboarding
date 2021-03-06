import React, { useState, useEffect } from 'react'
import Form from './Form'
import * as yup from 'yup'
import formSchema from './Validation/formSchema'
import axios from 'axios'
import User from './User'


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
  
  

  //onChange handler
  const inputHandler = (inputName, inputValue) => {
    // validation
    yup.reach(formSchema, inputName)
    .validate(inputValue)
    .then(() => {
      setFormErrors({...formErrors, [inputName]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [inputName]: err.errors[0]})
    })

    // setting state to the form values
    setFormValues({...formValues, [inputName]: inputValue})
  }

  //get users
  useEffect(() => {
    axios.get('https://reqres.in/api/users')
    .then (res => {
      setUsers(res.data.data)
    })
    .catch (err => {
      console.log(err)
    })
  }, [])

  // post user
  const postUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users])
    })
    .catch(err => {
      console.log('Here is the error', err)
    })
    setFormValues(initialForm)
  }

  //submit button handler
  const submitHandler = () => {
    const newUser = {
      first_name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    }

    //posting users on submit
    postUser(newUser)
  }

  //submit button validation
  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className="App">
      <Form
        values={formValues}
        errors={formErrors}
        disabled={disabled}
        inputHandler={inputHandler}
        submitHandler={submitHandler}
      />

      {users.map(user => {
        return (
          <User 
            key={user.id}
            user={user}
          />
        )
      })}
    </div>
  );
}

export default App;
