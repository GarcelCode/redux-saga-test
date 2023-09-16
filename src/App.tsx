import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  getPokemonsAction,
  pokemonsSelector,
} from "./redux/Slices/pokemonsSlice";
import { useEffect } from "react";

function App() {
  const { pokemons, isGettingPokemons } = useSelector(pokemonsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsAction());
  }, []);

  return (
    <>
      {isGettingPokemons ? (
        "Loading..."
      ) : (
        <div>
          {pokemons?.results.map((result, key) => (
            <div>{`${key + 1} - ${result.name}`}</div>
          ))}
          <div>Total: {pokemons?.count}</div>
        </div>
      )}
    </>
  );
}

export default App;
