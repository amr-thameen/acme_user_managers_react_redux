import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'

const initialState = {
    users: [],
    managers: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_USERS':
            return 
    }
    return state;
}

const store = createStore(getUsers, initialState)

function getUsers() {
    return function () {
        axios.get('/api/users')
            .then((response) => response.data)
            .then(users => store.dispatch({
                type: 'GET_USERS',
                payLoad: users
            }))
    }
}

