//Core imports & dependencies
import React,{ Fragment, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Local Component Views
import About from './components/views/About';
import Search from './components/views/About';
import Pokedetails from './components/views/Pokedetails';

//Local Component Modules
import './App.css';
import Navbar from './components/layout/Navbar';
import Pokemon from './components/resources/Pokemon';
import Search from './components/resources/Search';
import Alert from './components/layout/Alert';

//Hook Modules
import PokemonState from './context/pokemon/PokemonState'

const App = () => {

  //Defining Default States
  const[msg, setMsg] = useState('');
  const[type, setType] = useState('');
 
  //FUNCTION: Alert for when search fields completed incorrectly
  const setAlert = (msgfromsearch, typefromsearch) => {
    setMsg(msgfromsearch);
    setType(typefromsearch);
    setTimeout(() => setMsg(''), setType(''), 5000);
  };

  //Render to the DOM
  return(
    <PokemonState>
      <Router>
      <div className = "App">
        <Navbar />
        <div className = "container">
          <Alert msg={msg} type={type} />
          <Switch>
            
            {/* ROUTE: Home w Search*/}
            <Route exact path='/' render={props =>(
              <Fragment>
                <Search setAlert={setAlert} />
                <Pokemon />  
              </Fragment>
            )} />

            {/* ROUTE: AboutUs */}
            <Route exact path='/about' component={About} />

            {/* ROUTE: PokeSearch */}
            <Route exact path='/search' component={Search} />

            {/* ROUTE: PokeDetails */}
            <Route exact path='/pokemon/:name' render={props => (
              <Pokedetails {...props} />
            )} />

          </Switch>
        </div>
      </div>
    </Router>
    </PokemonState>
  );
}

export default App;


//To Debug: (1) API fetch requests

//To Expand: (1) Add 2nd fetch to obtain further pokemon data from API, (2) Fetch image urls dynamically for pokemon profile pages (`https://pokeres.bastionbot.org/images/pokemon/${this.state.pokemons.id}.png`)
