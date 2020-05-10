// I am the Search component yo
import React, { useState } from "react";
export const useFetchOnDemand = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const fetchData = async (url, options) => {
    setData(null);
    setError(null);
    console.log({ url, options });
    setLoading(true);
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      setLoading(false);
      setData(json);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return [fetchData, { loading, error, data }];
};
const Pokemon = ({ pokemon }) => (
  <div>
    <h3>{pokemon.name}</h3>
    <img src={pokemon.sprites.front_default} alt={`${pokemon.name} sprite`} />
  </div>
);
export default function Search(props) {
  const [searchString, setSearchString] = useState("");
  const [fetchData, { loading, error, data }] = useFetchOnDemand();
  const handleClick = () => {
    fetchData(`https://pokeapi.co/api/v2/pokemon/${searchString}`, {});
  };
  if (data) {
    console.log(data);
  }
  return (
    <div>
      {/* this is your search field */}
      <div style={{ display: "flex" }}>
        <input onChange={(e) => setSearchString(e.target.value)} />
        <button onClick={handleClick}>search</button>
      </div>
      {/* this is where the pokemon details go */}
      {loading && "Loading...."}
      {error && "Not found"}
      {data && <Pokemon pokemon={data} />}
    </div>
  );
}