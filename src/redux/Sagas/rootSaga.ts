import { all, fork } from "redux-saga/effects";
import { watchGetPokemons } from "./pokemonsSaga";

const rootSaga = function* () {
  yield all([fork(watchGetPokemons)]);
};

export default rootSaga;
