export class PokemonDetails {
  constructor(onBack) {
    this.container = document.createElement("div");
    this.container.classList.add("pokemon-details");
    this.onBack = onBack;
  }

  show(pokemon) {
    this.container.innerHTML = `
      <button class="back-btn">← Voltar</button>
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <h2>${pokemon.name} (#${pokemon.id})</h2>
      <p><strong>Tipo:</strong> ${pokemon.types.join(", ")}</p>
      <h3>Stats</h3>
      <ul>
        ${pokemon.stats.map(s => `<li>${s.name}: ${s.base}</li>`).join("")}
      </ul>
    `;

    this.container.querySelector(".back-btn").addEventListener("click", this.onBack);
    this.container.style.display = "block";
  }

  hide() {
    this.container.style.display = "none";
  }

  render() {
    return this.container;
  }
}
