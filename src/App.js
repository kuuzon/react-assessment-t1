//Core imports & dependencies
import React,{ Component } from 'react';
import Axios from 'axios';

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
    pokeDetails: [],
    loading: false,
    msg: '',
    type: '',
  };

  //FUNCTION: Access & fetch RESTful API data and pass into states
  async componentDidMount() {
    this.setState({ loading:true });

    try {
      const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
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
  //FUNCTIONS: Search, clear & alerts(for failed search)
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

  //Render to the DOM
  render(){
    const {loading, pokemons} = this.state
    return(
      <div className = "App">
        <Navbar />
        <div className = "container">
          <Alert msg={this.state.msg} type={this.state.type} />
          <Search searchPokemon = {this.searchPokemon} clearPokemon={this.clearPokemon} showClear={pokemons.length>0?true:false} setAlert={this.setAlert} />
          <Pokemon loading = {loading} pokemons = {pokemons} />  
        </div>
      </div>
    );
  };
}

export default App;


//To Complete: (1) Search functionaility, (2) individual pokemon profile pages & (3) Static Abous Us

//To Expand: (1) Add 2nd fetch to obtain further pokemon data from API, (2) Fetch image urls dynamically for pokemon profile pages (`https://pokeres.bastionbot.org/images/pokemon/${this.state.pokemons.id}.png`)

//To Adjust (if time): (1) Apply Hooks into the project and convert