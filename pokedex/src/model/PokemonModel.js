export class PokemonModel {
    constructor({ name, id, types, sprites, stats }) {
      this.name = name;
      this.id = id;
      this.types = types.map(t => t.type.name);
      this.image = sprites.other["official-artwork"].front_default;
      this.stats = stats.map(s => ({
        name: s.stat.name,
        base: s.base_stat
      }));
    }
  }
  