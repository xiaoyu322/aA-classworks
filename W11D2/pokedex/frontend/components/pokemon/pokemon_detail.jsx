import pokemonReducer from "../../reducers/pokemon_reducer";
import React from 'react';
import {Route} from 'react-router-dom'
import PokemonIndexItem from './pokemon_index_item'

class PokemonDetail extends Components {
    componentDidMount() 
    {
        this.props.this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
}