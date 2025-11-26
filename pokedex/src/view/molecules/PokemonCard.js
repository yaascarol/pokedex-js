export class PokemonCard {
  constructor(pokemon, onSelect) {
    this.pokemon = pokemon;
    this.onSelect = onSelect;
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    const img = document.createElement("img");
    img.src = this.pokemon.image;

    const name = document.createElement("h3");
    name.textContent = this.pokemon.name;

    const types = document.createElement("p");
    types.textContent = this.pokemon.types.join(", ");

    card.append(img, name, types);
    card.addEventListener("click", () => this.onSelect(this.pokemon));
    return card;
  }
}
