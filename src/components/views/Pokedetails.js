import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import pokemonContext from "../../context/pokemon/pokemonContext";

const Pokedetails = ({ match }) => {
    
    const pokemoncontexts = useContext(pokemonContext);
    
    const { getPokemon, loading } = pokemoncontexts;
    
    useEffect(() => {
        getPokemon(match.params.name);
        // console.log(match.params.name);
    }, []);

    const {pokemondetails} = pokemoncontexts;
    // console.log(pokemondetails);

    //Forced component load initialisation via pokemondetails: undefined
    if (pokemondetails) {

        const { name, height, weight, sprites } = pokemondetails;
    
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>
                    Back to Search
                </Link>
                <div className='card-grid-2'>
                    {/* 1st Column */}
                    <div className='all-center'>
                        <h2>{name}</h2>
                        <img
                            src={sprites.front_default}
                            alt={`${name} sprite`}
                            style={pokeStyle}
                        />
                    </div>
                    {/* 2nd Column */}
                    <div className='all-center'>
                        <h4>Height: {height} metres</h4>
                        <h4>Weight: {weight} grams</h4>
                    </div>
                </div>
            </Fragment>
        );
    } else {
        return null
    }
};

const pokeStyle = {
    backgroundColor: '#F5F4F5',
    width: '60px',
}

export default Pokedetails