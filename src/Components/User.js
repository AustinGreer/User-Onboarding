import React from 'react'

function User (props)  {
    const {user} = props
    
    return(
        <div>
            <h1>{user.first_name}</h1>
            <p>{user.email}</p>
        </div>
    )
}

export default User;