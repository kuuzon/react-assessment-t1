//Core imports & dependencies
import React,{ Component, Fragment } from 'react';
import Axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Local Component Views
import About from './components/views/About';
import Pokedetails from '/components/views/Pokedetails';

//Local Component Modules
import './App.css';
import Navbar from './components/layout/Navbar';
import Pokemon from './components/resources/Pokemon';
import Search from './components/resources/Search';
import Alert from './components/layout/Alert';


class App extends Component {

  //Defining Default States
  state = {
    pokemons: [],
    pokemondetails: {},
    loading: false,
    msg: '',
    type: '',
  };

  //FUNCTION: Access & fetch RESTful API data and pass into states
  async componentDidMount() {
    this.setState({ loading:true });

    try {
      const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=964`);
      this.setState({ pokemons: res.data.results, loading: false });
      console.log(res.data.results);
    } catch(err) {
      console.log("The API data cannot be fetched");
      this.setState({ loading: false });
      throw err
    }

    // const x = await Axios.get(this.state.pokemons.url);   //HELP: Writing 2nd Axios.get to fetch nested API array
    // this.setState({ pokeDetails: x})
  };
  //FUNCTIONS: Search, clear & alert for failed search
  searchPokemon = async (text) => {
    this.setState({ loading: true });
    const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${text}/`);
    this.setState({pokemons:res.data, loading: false});     //Maybe res.data.items later
    console.log(this.state.pokemons)
  };

  clearPokemon = () => {
    this.setState({ pokemons: [], loading: false });
  };

  setAlert = (msgfromsearch, typefromsearch) => {
    this.setState({ msg: msgfromsearch, type: typefromsearch});
    setTimeout(() => this, this.setState({ msg: '', type: '' }), 5000);
  };

  //FUNCTION: Get Pokedetails
  getPokemon = async(pokemonSlug) => {
    this.setState({loading:true});
    const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSlug}`);
    this.setState({pokemondetails: res.data, loading: false});
  }

  //Render to the DOM
  render(){
    const {loading, pokemons} = this.state
    return(
      <Router>
        <div className = "App">
          <Navbar />
          <div className = "container">
            <Alert msg={this.state.msg} type={this.state.type} />
            <Switch>
              
              {/* ROUTE: Home w Search*/}
              <Route exact path='/' render={props =>(
                <Fragment>
                  <Search searchPokemon = {this.searchPokemon} clearPokemon={this.clearPokemon} showClear={pokemons.length>0?true:false} setAlert={this.setAlert} />
                  <Pokemon loading = {loading} pokemons = {pokemons} />  
                </Fragment>
              )} />

              {/* ROUTE: AboutUs */}
              <Route exact path='/about' component={About} />

              {/* ROUTE: PokeDetails */}
              <Route exact path='/pokemon/:pokemonSlug' render={props => (
                <Pokedetails {...props} getPokemon={this.getPokemon} pokemondetails={this.state.pokemondetails} loading={loading} />
              )} />

            </Switch>
          </div>
        </div>
      </Router>
    );
  };
}

export default App;


//To Complete: (1) Search functionaility, (2) individual pokemon profile pages 

//To Expand: (1) Add 2nd fetch to obtain further pokemon data from API, (2) Fetch image urls dynamically for pokemon profile pages (`https://pokeres.bastionbot.org/images/pokemon/${this.state.pokemons.id}.png`)

//To Adjust (if time): (1) Apply Hooks into the project and convert