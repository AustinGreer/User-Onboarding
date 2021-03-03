import React from 'react'
import styled from 'styled-components'

function Form () {
    return (
        <StyledDiv>
            <form>
                <h1>Welcome to User Onboard!</h1>
                <label>
                    Name:
                    <input 
                        type='text'
                        name='name'
                    />
                </label>

                <label>
                    Email:
                    <input
                        type='email'
                        name='email'
                    />
                </label>

                <label>
                    Password:
                    <input 
                        type='password'
                        name='password'
                    />
                </label>

                <label>
                    Terms of Service:
                    <input 
                        type='checkbox'
                        name='Terms of Service'
                    />
                </label>

                <button type='submit'>Submit!</button>
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
    }
`

export default Form