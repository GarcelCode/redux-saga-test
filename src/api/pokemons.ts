import { http } from "./_http";

export async function getPokemons() {
  return await http.get("/pokemon?limit=20&offset=0");
}
