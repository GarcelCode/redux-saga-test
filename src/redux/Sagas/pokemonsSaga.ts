import {
  getPokemonsErrorAction,
  getPokemonsSuccessAction,
  responseType,
} from "../Slices/pokemonsSlice";
import { put, takeLatest } from "redux-saga/effects";
import { getPokemons } from "../../api/pokemons";
import { AxiosResponse } from "axios";

function* getPokemonsSaga() {
  try {
    const response: AxiosResponse<responseType> = yield getPokemons();
    yield put(getPokemonsSuccessAction(response.data));
  } catch (error) {
    yield put(getPokemonsErrorAction(error as string));
  }
}

export function* watchGetPokemons() {
  yield takeLatest("pokemons/getPokemonsAction", getPokemonsSaga);
}
