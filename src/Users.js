import React from 'react'
import render from 'react-dom'
import {Link} from 'react-router-dom'


const Users = function({users, removeUser}){
    return (
        <div> 
            <ul>
                {users.map(user => {
                    return (
                    <li key = {user.id}>
                    <h3> <Link to = {`/api/users/${user.id}`}> {user.name} {user.managerId? `managed by ${user.managerId}` : ""}</Link></h3>
                    <div>
                    <button onClick = {() => removeUser(user.id)} className = "btn btn-danger"> Remove </button>
                    </div>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Users;