import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = ({pokemon}) => (
    <li className='pokemon-index-item'>
        <Link to={`/pokemon/${pokemon.id}`}>
            <span>{pokemon.id}</span>
            <div>{pokemon.name}</div>
            <img src={pokemon.image_url} />
        </Link>
    </li>
);


//const pokemonItems = pokemon.map(poke => (
    //<PokemonIndexItem key={poke.id} pokemon={poke} />
//));

export default PokemonIndexItem;