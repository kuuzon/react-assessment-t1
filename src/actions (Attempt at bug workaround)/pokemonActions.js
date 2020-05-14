import Axios from 'axios'

import { 
    LIST_POKEMON, 
    SEARCH_POKEMON, 
    SET_LOADING, 
    CLEAR_POKEMON, 
    GET_POKEMON 
} from './types';

//FUNCTION: Set loading function
export const setLoading = () => async dispatch => {
    dispatch({ type: SET_LOADING });
}

//FUNCTION: List PokeAPI for 964 top-level array (id, name & url)
export const listPokemon = () => async dispatch  => {
    setLoading();
    
    const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=964`);
    
    dispatch({
        type: LIST_POKEMON,
        payload: res.data.results,
    })
};

//FUNCTION: Search PokeAPI for 964 top-level array (id, name & url)
export const searchPokemon = () => async dispatch => {
    setLoading();

    const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=964`);

    dispatch({
        type: SEARCH_POKEMON,
        payload: res.data.results,
    });
};

//FUNCTION: Search PokeAPI for pokemon details second-level array (name, sprite, height, weight, etc.)
export const getPokemon = name => async dispatch => {
    setLoading();
    
    const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    
    dispatch({
        type: GET_POKEMON,
        payload: res.data,
    })
    // console.log("test", res.data)
};

//FUNCTION: Clear home page of pokemonlist
export const clearPokemon = () => async dispatch => {
    dispatch({ type: CLEAR_POKEMON })
};