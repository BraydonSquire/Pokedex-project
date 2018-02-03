import axios from 'axios';

const initialState = {
    pokemon: []
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


export default function reducer(state = initialState, action) {

    switch(action.type) {

        case GET_POKEMON + '_FULFILLED':
            return Object.assign({}, state, {pokemon: action.payload})

        default:
        return state;

    }
}