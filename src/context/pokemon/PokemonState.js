import {useReducer} from 'react';
import Axios from 'axios';
import pokemonReducer from './pokemonReducer';

import { LIST_POKEMON, SET_LOADING, CLEAR_POKEMON, GET_POKEMON } from '../types';

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

    //FUNCTION: List PokeAPI for 964 top-level array (id, name & url)
    const listPokemon = async () => {
        setLoading();
        
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=964`);
        
        dispatch({
            type: LIST_POKEMON,
            payload: res.data.results,
        })
    };

    //FUNCTION: Search PokeAPI for pokemon details second-level array (name, sprite, height, weight, etc.)
    const getPokemon = async(name) => {
        console.log('Getting Pokemon!!!!!!')
        setLoading();
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        dispatch({
            type: GET_POKEMON,
            payload: res.data,
        })
        console.log("Fetch test", res.data)
    };

    //FUNCTION: Clear home page of pokemonlist
    const clearPokemon = () => {
        dispatch({ type: CLEAR_POKEMON })
    };

    return{
        pokemons: state.pokemons,
        pokemondetails: state.pokemondetails,
        loading: state.loading,
        listPokemon,
        clearPokemon,
        getPokemon,
    }
};

export default PokemonState;
