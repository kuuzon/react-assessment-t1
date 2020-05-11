import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Pokedetails extends Component {
    componentDidMount(){
        this.props.getPokemon(this.props.match.params.pokemonSlug)
    }
    
    render(){
        const {name, types, height, weight, sprites} = this.props.pokemondetails;
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
}

const pokeStyle = {
    backgroundColor: '#003A70',
    width: '60px',
}

export default Pokedetails







