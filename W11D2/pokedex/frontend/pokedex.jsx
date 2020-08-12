import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import fetchAllPokemon from './util/api_util';
import receiveAllPokemon, { requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selector';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container'
import { HashRouter, Route } from "react-router-dom";

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>   
            <Route path="/" component={PokemonIndexContainer} />
        </HashRouter>
    </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();

    //testing
    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.selectAllPokemon = selectAllPokemon
    window.requestAllPokemon = requestAllPokemon

    ReactDOM.render(<Root store={store}/>, rootEl);
});
