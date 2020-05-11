// I AM THE LIST COMPONENT... yo
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const ListItem = ({ item }) => (
  <Link to={`/pokemon/${item.name}`}>
    <div
      style={{
        padding: "1rem",
        background: "yellow",
        marginBottom: "0.5rem",
      }}
    >
      {item.name}
    </div>
  </Link>
);

const API_URL = "https://pokeapi.co/api/v2/pokemon";

function PokemonList() {
  const [offset, setOffset] = useState(0);
  const [fetchData, { loading, error, data }] = useFetchOnDemand();
  const queryParams = `?offset=${offset}&limit=10`;
  
  const getPokemon = () => fetchData(API_URL + queryParams, {});
  useEffect(() => {
    console.log("getting...");
    getPokemon();
  }, [offset]);
  const nextPage = () => {
    const newOffset = offset + 10;
    setOffset(newOffset);
  };
  const prevPage = () => {
    const newOffset = offset - 10;
    setOffset(newOffset);
  };
  if (loading) {
    return "loading";
  }
  if (error) {
    return "error";
  }
  if (data) {
    console.log(data);
    // destructuring some stuff out of the data we got back from the API
    const { count, results, next, previous } = data;
    
    return (
      <div>
        <div>
          {/* turning our results into a set of list items */}
          {results.map((item) => (
            <ListItem item={item} key={item.name} />
          ))}
        </div>
        <div>
          <button disabled={previous === null || loading} onClick={prevPage}>
            Previous
          </button>
          <label>
            {offset / 10 + 1} of {Math.round(count / 10)}
          </label>
          <button disabled={next === null || loading} onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    );
  }
  return null;
}
export default PokemonList;