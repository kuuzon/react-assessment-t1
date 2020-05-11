import React from 'react'
import Pokemonitem from './Pokemonitem'
import Spinner from '../layout/Spinner'

const Pokemon = ({ pokemons, loading }) => {

    if(loading){
        return <Spinner />
    }else{
        return (
            <div style = { pokeStyle }>
                {pokemons.map(pokemon => (           //Iterate through the JSON data 
                    <Pokemonitem key = {pokemon.name} pokemon = {pokemon} />
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