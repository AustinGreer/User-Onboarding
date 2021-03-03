import React from 'react'
import styled from 'styled-components'

function Form (props) {
    const { values, errors, disabled, inputHandler} = props

    const onChange = (event) => {
        const {name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        inputHandler(name, valueToUse)
    }
    
    return (
        <StyledDiv>
            <form>
                <h1>Welcome to User Onboard!</h1>
                <p>{errors.name}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
                <p>{errors.tos}</p>
                <label>
                    Name:
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Email:
                    <input
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Password:
                    <input 
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Terms of Service:
                    <input 
                        type='checkbox'
                        name='tos' 
                        checked={values.tos}
                        onChange={onChange}
                    />
                </label>

                <StyledButton type='submit' disabled={disabled}>Submit!</StyledButton>
            </form>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    form {
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

            label {
                margin-bottom: 3%;
            }
    }
`

const StyledButton = styled.button`
    width: 10%;
    height: 1.5rem;
    background: orange;
`

export default Form