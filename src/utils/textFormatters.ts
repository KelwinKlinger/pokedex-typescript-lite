import { Pokemon } from "../models/Pokemon";

export function formatarPokemon(pokemon: Pokemon): string {
  return `#${pokemon.id} - ${pokemon.name} | Tipos: ${pokemon.types.join(", ")} | Altura: ${pokemon.height} | Peso: ${pokemon.weight}`;
}
