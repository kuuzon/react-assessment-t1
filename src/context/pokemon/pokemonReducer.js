import { SEARCH_POKEMON, LIST_POKEMON, GET_POKEMON, CLEAR_POKEMON, SET_LOADING } from '../types';

export default (state, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        
        case SEARCH_POKEMON:
            return {
                ...state,
                pokemons: action.payload.filter,
                loading: false,
            };

        case LIST_POKEMON:
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
            };

        case GET_POKEMON:
            return {
                ...state,
                pokemondetails: action.payload,
                loading: false,
            };

        case CLEAR_POKEMON:
            return{
                ...state,
                pokemons: [],
                loading: false,
            };
        
        default:
            return state;
    }
}
