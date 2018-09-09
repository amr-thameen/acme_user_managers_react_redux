import React, { Component } from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import Users from './Users'
import Nav from './Nav'
import axios from 'axios'
import Managers from './Managers'
import UserCreateUpdate from './UserCreateUpdate';
import store from './store'

class App extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            managers: []
        }
        this.removeUser = this.removeUser.bind(this)
    }

    componentDidMount() {
        axios.get('/api/users')
            .then((response) => response.data)
            .then(users => { this.setState({ users: users }) })
            .then(() => {
                this.state.users.map(user => {
                    const manager = user.managerId? this.state.users[user.managerId].name : null
                    this.setState({ managers: [...this.state.managers, user] })
                })
                console.log(this.state)
            })
    }

    removeUser(id) {
        axios.delete(`/api/users/${id}`)
        this.setState({ users: this.state.users.filter(user => user.id !== id) })
    }

    render() {
        const { users, managers } = this.state
        const { removeUser } = this
        return (
            <Router>
                <div>
                    <Route path="/" render={() => <Nav users={users} managers={managers} path = {location}/>} />
                    <Route path="/users" render={() => <Users users={users} removeUser={removeUser} />} />
                    <Route path="/managers" render={() => <Managers users={users} />} />
                    <Route exact path="/users/create" render={() => <UserCreateUpdate />} />
                </div>
            </Router>
        )
    }
}

export default App;