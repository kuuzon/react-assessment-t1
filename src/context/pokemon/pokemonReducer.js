import { 
    SEARCH_POKEMON, 
    LIST_POKEMON, 
    GET_POKEMON, 
    CLEAR_POKEMON, 
    SET_LOADING 
} from '../types';

export default function (state, action){
    console.log({state, action})

    const { type, payload } = action;
    console.log({type, payload})

    switch(type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        
        case SEARCH_POKEMON:
            return {
                ...state,
                pokemons: payload.filter,
                loading: false,
            };

        case LIST_POKEMON:
            return {
                ...state,
                pokemons: payload,
                loading: false,
            };

        case GET_POKEMON:
            // console.log(payload)
            return {
                ...state,
                pokemondetails: payload,
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