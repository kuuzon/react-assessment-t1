import React, {useReducer} from 'react';
import Axios from 'axios';
import pokemonContext from './pokemonContext';
import pokemonReducer from './pokemonReducer';

import { SEARCH_POKEMON, SET_LOADING, CLEAR_POKEMON, GET_POKEMON } from '../types';

const PokemonState = props => {
    
    const initialState = {
        pokemons: [],
        loading: false,
        msg: '',
        type: '',
        pokemondetails: {},
    };

    const [state, dispatch] = useReducer(pokemonReducer, initialState);

    //FUNCTION: Set loading function
    const setLoading = () => dispatch({ type: SET_LOADING })

    //FUNCTION: Search PokeAPI for 964 top-level array (id, name & url)
    const searchPokemon = async (text) => {
        setLoading();
        
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${text}/`);
        
        dispatch({
            type: SEARCH_POKEMON,
            payload: res.data,
        })
    };

    //FUNCTION: Search PokeAPI for pokemon details second-level array (name, sprite, height, weight, etc.)
    const getPokemon = async(pokemonSlug) => {
        setLoading();
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSlug}`);
        dispatch({
            type: GET_POKEMON,
            payload: res.data,
        })
    };

    //FUNCTION: Clear home page of pokemonlist
    const clearPokemon = () => {
        dispatch({ type: CLEAR_POKEMON })
    };

    return(
        <pokemonContext.Provider
            value={{
                pokemons: state.pokemons,
                pokemondetails: state.pokemondetails,
                loading: state.loading,
                searchPokemon,
                clearPokemon,
                getPokemon,
            }}
        >{props.children}

        </pokemonContext.Provider>
    )
};

export default PokemonState;
