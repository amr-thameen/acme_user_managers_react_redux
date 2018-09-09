import React from 'react'
import render from 'react-dom'


const Managers = function({users}){
    
    return (
        <div> 
            <ul>
                {users.map(user => {
                    return <h3 key={user.id}><li>{user.managerId !== null? user.managerId : ""}</li></h3>
                })}
            </ul>
        </div>
    )
}


export default Managers;