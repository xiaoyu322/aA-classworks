import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';

const pokemonReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let newState = Object.assign({}, oldState, action.pokemon);
    switch (action.type){
        case RECEIVE_ALL_POKEMON:
            return newState;
        default: 
            return oldState;
    };
};
export default pokemonReducer;