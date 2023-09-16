import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export type pokemonDataType = {
  name: string;
  url: string;
};

export type responseType = {
  count: number;
  next: string;
  previous: string;
  results: pokemonDataType[];
};

export type pokemonsStateType = {
  pokemons: responseType | undefined;
  isGettingPokemons: boolean;
  errors: string;
};

const pokemonsInitialState: pokemonsStateType = {
  pokemons: undefined,
  isGettingPokemons: false,
  errors: "",
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: pokemonsInitialState,
  reducers: {
    getPokemonsAction: (state: pokemonsStateType) => {
      state.isGettingPokemons = true;
      state.errors = "";
    },
    getPokemonsSuccessAction: (
      state: pokemonsStateType,
      { payload: data }: PayloadAction<responseType>
    ) => {
      state.isGettingPokemons = false;
      state.pokemons = data;
    },
    getPokemonsErrorAction: (
      state: pokemonsStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.isGettingPokemons = false;
      state.errors = error;
    },
  },
});

export const {
  getPokemonsAction,
  getPokemonsSuccessAction,
  getPokemonsErrorAction,
} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
export const pokemonsSelector = (state: RootState) => state.pokemons;
