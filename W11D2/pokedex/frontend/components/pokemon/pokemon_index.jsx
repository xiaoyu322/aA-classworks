import pokemonReducer from "../../reducers/pokemon_reducer";
import React from 'react';
import {Route} from 'react-router-dom'
import PokemonIndexItem from './pokemon_index_item'

const { Component } = require("react");

class PokemonIndex extends Component{
    componentDidMount() {
        this.props.requestAllPokemon();
    }
    
    render(){
        return(
            <section className='pokedox'>
                <Route path='/pokemon/:pokemonId' />
                <ul>
                    {this.props.pokemon.map(poke=><PokemonIndexItem key={poke.id} pokemon={poke} />)}
                </ul>
            </section>
        )
    }
}

export default PokemonIndex;