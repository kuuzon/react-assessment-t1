// Details page for a specific component
import React from "react";
import { useFetch } from "../hooks";
import { useParams } from "react-router";
export default function PokemonDetails(props) {
  const { pokemonSlug } = useParams();
  const { loading, error, data } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonSlug}`,
    {}
  );
  if (loading) {
    return "loading";
  }
  if (error) {
    return "error";
  }
  console.log(data);
  if (data) {
    return (
      <div>
        <h2>{data.name}</h2>
        <img src={data.sprites.front_default} alt={`${data.name} sprite`} />
      </div>
    );
  }
  return null;
}