import axios from 'axios';

const initialState = {
    pokemon: [],
    userInfo:{}
}

const GET_POKEMON = 'GET_POKEMON';

export function getPokemon() {
    console.log('getPokemon fired')
    const pokemon = axios.get('/api/allpokemon')
    .then( res => {
        console.log('getPokemon: ', res.data)
        return res.data
    })
    return {
        type:GET_POKEMON,
        payload:pokemon
    }
}

const GET_USER_INFO = 'GET_USER_INFO';

export function getUserInfo() {
    const userData = axios.get('/auth/me')
    .then(res => {
         return res.data
        console.log('getuserinfo fired', res.data)
    })
    return {
        type: GET_USER_INFO,
        payload:userData
    }
}




export default function reducer(state = initialState, action) {

    switch(action.type) {

        case GET_POKEMON + '_FULFILLED':
            return Object.assign({}, state, {pokemon: action.payload})

        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {userInfo: action.payload})

        default:
        return state;

    }
}