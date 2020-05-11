// App.js (where the above are all put together)
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import PokemonList from "./views/PokemonList";
import PokemonDetails from "./views/PokemonDetails";
import Search from "./views/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <PokemonList />
          </Route>
          <Route path="/pokemon/:pokemonSlug">
            <PokemonDetails />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
