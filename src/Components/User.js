import React from 'react'
import styled from 'styled-components'

function User (props)  {
    const {user} = props

    return(
        <StyledDiv>
            <h1>{user.first_name}</h1>
            <p>{user.email}</p>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid green;
    width: 40%;
    margin: 0 auto;
    background: lightblue;
    color: orange;

    p {
        color: green;
    }
`

export default User;