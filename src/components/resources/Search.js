import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Search = ({ setAlert, searchPokemon, showClear, clearPokemon }) => {
    
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
            console.log(text);
            searchPokemon(text);
        }
    };

    // const {showClear, clearPokemon} = this.props;
    return (
        <div>
            <form className="form" onSubmit={this.onSubmit}>
                <input type="text" name="text" placeholder="Search Pokemon..." value={this.state.text} onChange={this.onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
            {showClear && (
                <button className="btn btn-light btn-block" onClick={clearPokemon}>Clear</button>
            )}
        </div>
    )
}

Search.propTypes = {
    searchPokemon: PropTypes.func.isRequired,
    clearPokemon: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
};

export default Search