import { PokemonModel } from "../model/PokemonModel.js";

export class PokeService {
  static baseUrl = "https://pokeapi.co/api/v2/pokemon";

  static async getAll(limit = 20, offset = 0) {
    const res = await fetch(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
    const data = await res.json();

    const pokemons = await Promise.all(
      data.results.map(p => fetch(p.url).then(r => r.json()))
    );
    return pokemons.map(p => new PokemonModel(p));
  }

  static async getByName(name) {
    if (!name) return null;
    try {
      const res = await fetch(`${this.baseUrl}/${name.toLowerCase()}`);
      if (!res.ok) return null;
      const data = await res.json();
      return new PokemonModel(data);
    } catch {
      return null;
    }
  }
}
