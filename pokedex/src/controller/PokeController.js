import { PokeService } from "../service/PokeService.js";
import { PokemonList } from "../view/organisms/PokemonList.js";
import { PokemonDetails } from "../view/organisms/PokemonDetails.js";
import { SearchBar } from "../view/molecules/SearchBar.js";

export class PokeController {
  constructor(root) {
    this.root = root;
    this.limit = 200;
    this.offset = 0;
    this.pokemons = [];
    this.isLoading = false;
    this.hasMore = true;
    this.init();
  }

  async init() {
    this.searchBar = new SearchBar(query => this.searchPokemon(query));
    this.list = new PokemonList(
      pokemon => this.showDetails(pokemon),
      () => this.loadMore()
    );
    this.details = new PokemonDetails(() => this.backToList());

    this.root.append(this.searchBar.render(), this.list.render(), this.details.render());
    this.details.hide();

    await this.loadPokemons();
  }

  async loadPokemons() {
    if (this.isLoading || !this.hasMore) return;
    this.isLoading = true;

    const pokemons = await PokeService.getAll(this.limit, this.offset);
    if (pokemons.length === 0) this.hasMore = false;

    this.pokemons = [...this.pokemons, ...pokemons];
    this.list.update(this.pokemons);

    this.offset += this.limit;
    this.isLoading = false;
  }

  async loadMore() {
    await this.loadPokemons();
  }

  async searchPokemon(query) {
    if (!query) {
      this.list.update(this.pokemons);
      this.details.hide();
      this.list.show();
      return;
    }

    const pokemon = await PokeService.getByName(query);
    if (pokemon) {
      this.list.update([pokemon]);
      this.details.hide();
      this.list.show();
    } else {
      this.list.update([]);
    }
  }

  showDetails(pokemon) {
    this.list.hide();
    this.details.show(pokemon);
  }

  backToList() {
    this.details.hide();
    this.list.show();
  }
}
