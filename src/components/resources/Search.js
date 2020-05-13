import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import pokemonContext from '../../context/pokemon/pokemonContext';

const Search = ({ setAlert }) => {

    const pokemoncontexts = useContext(pokemonContext);
    
    //DEFINE STATE (Hooks):
    const [text, setText] = useState('');

    const onChange = (e) => {                 //"e" can also refer to a react synthetic "event"
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();                 //preventDefault: Called to prevent a browser reload/refresh
        if(text === ''){
            setAlert('Please enter characters in the field', 'light')
        }else{
            pokemoncontexts.listPokemon(text);
        }
    };

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Search Pokemon..." value={text} onChange={onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
            {pokemoncontexts.pokemons.length>0 && (
                <button className="btn btn-light btn-block" onClick={pokemoncontexts.clearPokemon}>Clear</button>
            )}
        </div>
    )
}

Search.propTypes = {
    clearPokemon: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
};

export default Search