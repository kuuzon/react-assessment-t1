import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: '',
        type: '',
        height: '',
        weight: '',
    };

    static propTypes = {
        searchPokemon: PropTypes.func.isRequired,
        clearPokemon: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,
    };

    onChange = (e) => {                 //"e" can also refer to a react synthetic "event"
        this.setState({ [e.target.name]: e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();                 //preventDefault: Called to prevent a browser reload/refresh
        if(this.state.text === ''){
            this.props.setAlert('Please enter characters in the field', 'light')
        }else{
            // console.log(this.state.text);
            this.props.searchPokemon(this.state.text);
        }
    };

    render() {
        const {showClear, clearPokemon} = this.props
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
    };
}

export default Search