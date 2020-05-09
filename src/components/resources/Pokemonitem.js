import React from 'react'
import PropTypes from 'prop-types'

const Pokemonitem = ({ pokemon: { name, url }}) => {

    return (
        <div className ="card text-center">
            {/* <img src={avatar_url} alt="" className='round-img' style={ pokeStyle } /> */}
            <h3>{name}</h3>
            <h4>{url}</h4>
        </div>
    )
}

// const pokeStyle = {
//     backgroundColor: '#003A70',
//     width: '60px'
// }

Pokemonitem.propTypes = {
    pokemon: PropTypes.object.isRequired
}

export default Pokemonitem