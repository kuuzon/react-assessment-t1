//Core imports & dependencies
import React,{ Component } from 'react';
import Axios from 'axios';

//Local Component Modules
import './App.css';
import Navbar from './components/layout/Navbar';
import Pokemon from './components/resources/Pokemon';

class App extends Component {

  //Defining Default States
  state = {
    pokemons: [],
    pokeDetails: [],
    loading: false,
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

  //Render to the DOM
  render(){
    return(
      <div className = "App">
        <Navbar />
        <div className = "container">
          <Pokemon loading = {this.state.loading} pokemons = {this.state.pokemons} />  
        </div>
      </div>
    );
  };
}

export default App;


//To Complete: (1) Search functionaility, (2) individual pokemon profile pages & (3) Static Abous Us

//To Expand: (1) Add 2nd fetch to obtain further pokemon data from API, (2) Fetch image urls dynamically for pokemon profile pages (`https://pokeres.bastionbot.org/images/pokemon/${this.state.pokemons.id}.png`)

//To Adjust (if time): (1) Apply Hooks into the project and convert