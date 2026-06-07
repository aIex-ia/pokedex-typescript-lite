import { PokemonResumo } from "../models/Pokemon.js";

export function formatarNome(nome: string): string {
  return nome.trim().toLowerCase();
}

export function formatarPokemon(pokemon: PokemonResumo): string {
  return `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`;
}

export function formatarDetalhesPokemon(pokemon: PokemonResumo): string {
  return `${formatarPokemon(pokemon)} | HP: ${pokemon.hp} | Ataque: ${pokemon.ataque} | Defesa: ${pokemon.defesa}`;
}
