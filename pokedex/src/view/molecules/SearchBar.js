export class SearchBar {
  constructor(onSearch) {
    this.onSearch = onSearch;
  }

  render() {
    this.container = document.createElement("div");
    this.container.classList.add("search-bar");

    this.input = document.createElement("input");
    this.input.placeholder = "Buscar Pokémon";

    const button = document.createElement("button");
    button.textContent = "Buscar";

    button.addEventListener("click", () => {
      this.onSearch(this.input.value.trim());
    });

    this.container.append(this.input, button);
    return this.container;
  }
}
