import React, {Fragment, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import pokemonContext from '../../context/pokemon/pokemonContext';

const Pokedetails = ({ match }) => {
    
    const pokemoncontexts = useContext(pokemonContext);
    // console.log(pokemoncontexts)

    const { getPokemon, loading} = pokemoncontexts;

    useEffect(() => {
        getPokemon(match.params.name);
        console.log(match.params.name)
    }, [])


    //BUG TESTING: PERSISTENT BUG CANNOT SOLVE//

    // console.log(getPokemon);

    // useEffect(() => {
    //     async function fetchData() {
    //       // You can await here
    //       await getPokemon(match.params.name); 
    //       // ...
    //     }
    //     fetchData();
    //   }, []); 

    // useEffect(() => {
    // }, [getPokemon, match]);

    // getPokemon(match.params.name)
    // console.log(match.params.name)

    if(loading){
        console.log({loading})
        return 'loading...'
    }

    const {pokemondetails} = pokemoncontexts;
    console.log(pokemondetails);

    const {name, types, height, weight, sprites} = pokemondetails;
    
    return(
        <Fragment>
            <Link to="/" className="btn btn-light">Back to Search</Link>
            <div className="card-grid-2">

                {/* 1st Column */}
                <div className="all-center">
                    <h2>{name}</h2>
                    {types &&(
                        <Fragment>
                            <h4>Types: </h4>
                            <p>{types.type.name}</p>
                        </Fragment>
                    )}
                    <img src={sprites.front_default} alt={`${name} sprite`} style={ pokeStyle } />
                </div>
            
                {/* 2nd Column */}
                <div className="all-center">
                    <h4>Height: </h4>
                    <p>{height}</p>
                    <h4>Weight: </h4>
                    <p>{weight}</p>
                </div>
            </div>
        </Fragment>
    )
}

const pokeStyle = {
    backgroundColor: '#003A70',
    width: '60px',
}

export default Pokedetails



