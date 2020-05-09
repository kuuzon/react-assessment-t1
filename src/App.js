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
    loading: false
  };

  //FUNCTION: Access & fetch RESTful API data
  async componentDidMount() {
    this.setState({ loading:true });

    const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    this.setState({ pokemons: res.data.results, loading: false });
    console.log(res.data.results);
  };


  //LATER FUNCTION (if time): TRY-CATCH for API fetch
  //   try {
  //     const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  //     this.setState({ data: res.data, loading: false })
  //     console.log(res.data);
  //   } catch(err) {
  //     console.log("The API data cannot be fetched");
  //     this.setState({ loading: false });
  //     throw err
  //   }
  // }

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