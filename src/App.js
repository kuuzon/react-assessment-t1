//Core imports & dependencies
import React,{ Component } from 'react';
import Axios from 'axios';

//Local Component Modules
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
  
  //Defining Default States
  state = {
    users: [],
    loading: false
  };

  //FUNCTION: Access HTTP API / RESTful API web services (using Axios methods)
  async componentDidMount(){
    this.setState({ loading:true });
    const res = await Axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);      //Change to PokeAPI once front end modules working
    this.setState({ users:res.data, loading:false });
    console.log(res.data)
  };

  //Render to the DOM
  render(){
    return(
      <div className = "App">
        <Navbar />
        <div className = "container">
          <Users loading = {this.state.loading} users = {this.state.users}/>
        </div>
      </div>
    );
  };
}

export default App;