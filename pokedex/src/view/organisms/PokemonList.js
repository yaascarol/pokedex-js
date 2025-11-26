import { PokemonCard } from "../molecules/PokemonCard.js";

export class PokemonList {
  constructor(onSelect) {
    this.container = document.createElement("div");
    this.container.classList.add("pokemon-list");
    this.onSelect = onSelect;
  }

  update(pokemons) {
    this.container.innerHTML = "";
    pokemons.forEach(p => {
      const card = new PokemonCard(p, this.onSelect);
      this.container.append(card.render());
    });
  }

  render() {
    return this.container;
  }

  hide() {
    this.container.style.display = "none";
  }

  show() {
    this.container.style.display = "grid";
  }
}
