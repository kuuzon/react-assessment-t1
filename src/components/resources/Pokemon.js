import React, {useContext} from 'react'
import Pokemonitem from './Pokemonitem'
import Spinner from '../layout/Spinner'
import pokemonContext from '../../context/pokemon/pokemonContext';

const Pokemon = () => {

    const pokemoncontexts = useContext(pokemonContext);
    
    const { pokemons, loading } = pokemoncontexts;

    console.log(pokemons);

    if(loading){
        return <Spinner />
    }else{
        return (
            <div style = { pokeStyle }>
                
                {pokemons.map(pokemon => (           //Iterate through the JSON data 
                    <Pokemonitem key = {pokemon.id} pokemon = {pokemon} />
                ))}

            </div>
        )
    }
}

const pokeStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Pokemon