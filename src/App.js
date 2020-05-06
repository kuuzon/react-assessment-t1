import React,{Fragment, Component} from 'react';
import './App.css';

//Local Component Modules
import Navbar from './components/layout/Navbar'


class App extends Component {
  render(){
    return(
      <Fragment className="App">
        <Navbar title="Pokemon Finder" icon="fas fa-bolt"/>
        <h1>React Demo</h1>
        <label htmlFor=""></label>
      </Fragment>
    );
  };
}

export default App;
