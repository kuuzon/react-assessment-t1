import { 
    SEARCH_POKEMON, 
    LIST_POKEMON, 
    GET_POKEMON, 
    CLEAR_POKEMON, 
    SET_LOADING 
} from '../actions/types';

const initialState = {
    pokemons: [],
    loading: false,
    msg: '',
    type: '',
    pokemondetails: {},
    error: {},
};

export default function (state = initialState, action){
    const { type, payload } = action;

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
            console.log(payload)
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