import React from 'react'
import {HashRouter as Router, Link, Route} from 'react-router-dom'

const Nav = function({users, managers, path}){
    const isSelected = (_path)=> _path === path.pathname;
    console.log(path.pathname)
    return (
            <div>
               <ul>
                   <li className = {isSelected('/users') ? 'selected' : ''} ><Link to = "/users">Users {users.length}</Link></li>
                   <li className = {isSelected('/managers') ? 'selected' : ''} ><Link to = "/managers">Managers {managers.length}</Link></li>
                   <li className = {isSelected('/users/create') ? 'selected' : ''} ><Link to = "/users/create">Users Create</Link></li>
               </ul>
            </div>
    )
}

export default Nav;