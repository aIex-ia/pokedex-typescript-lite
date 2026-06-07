import { ApiError } from "../models/CustomErrors.js";
import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon.js";
import { formatarNome } from "../utils/textFormatters.js";

export class PokeApiService {
  private readonly baseUrl: string = "https://pokeapi.co/api/v2/pokemon";

  public async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    const termoBusca = formatarNome(nomeOuId);

    try {
      const resposta = await fetch(`${this.baseUrl}/${termoBusca}`);

      if (!resposta.ok) {
        throw new ApiError(`Pokémon não encontrado: ${termoBusca}`);
      }

      const dados = (await resposta.json()) as PokemonApiResponse;
      const pokemon = this.mapearPokemon(dados);

      console.log(`[OK] Pokémon encontrado: ${pokemon.nome}`);
      return pokemon;
    } catch (erro) {
      if (erro instanceof ApiError) {
        console.log(`[ERRO] ${erro.message}`);
        return null;
      }

      console.log("[ERRO] Não foi possível buscar o Pokémon.");
      return null;
    }
  }

  private mapearPokemon(dados: PokemonApiResponse): PokemonResumo {
    const tipos = dados.types.map((item) => item.type.name);

    const encontrarStat = (nomeStat: string): number => {
      const statEncontrado = dados.stats.find((item) => item.stat.name === nomeStat);
      return statEncontrado?.base_stat ?? 0;
    };

    return {
      id: dados.id,
      nome: dados.name,
      tipos,
      altura: dados.height,
      peso: dados.weight,
      hp: encontrarStat("hp"),
      ataque: encontrarStat("attack"),
      defesa: encontrarStat("defense")
    };
  }
}
