import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const Pokemonitem = ({ pokemon: { name }}) => {

    return (
        <div className ="card text-center">
            <h2>{name}</h2>
            <div>
                <Link to={`/pokemon/${name}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>
    )
}

Pokemonitem.propTypes = {
    pokemon: PropTypes.object.isRequired
}

export default Pokemonitem