export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
import * as APIUtil from '../util/api_util';

// export const createPokemon = () => (dispatch) =>{
//     return APIUtil.createPokemon()
//         .then(pokemon => {dispatch(receiveAllPokemon(pokemon))});
// }

export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})

export const receiveSinglePokemon = poke => ({
    type: RECEIVE_SINGLE_POKEMON,
    poke
})

export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (id) => (dispatch) => (
    APIUtil.fetchSinglePokemon(id)
        .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
)
