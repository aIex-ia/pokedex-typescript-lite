import { BoxService } from "../services/BoxService.js";
import { PokeApiService } from "../services/PokeApiService.js";

export class TerminalController {
  constructor(
    private readonly pokeApiService: PokeApiService,
    private readonly boxService: BoxService
  ) {}

  public async executarDemonstracao(): Promise<void> {
    console.log("=== Pokédex TypeScript Lite ===\n");

    await this.boxService.iniciarBox();

    const pikachu = await this.pokeApiService.buscarPokemon("pikachu");
    if (pikachu !== null) {
      await this.boxService.adicionar(pikachu);
    }

    const charmander = await this.pokeApiService.buscarPokemon("charmander");
    if (charmander !== null) {
      await this.boxService.adicionar(charmander);
    }

    const pikachuDuplicado = await this.pokeApiService.buscarPokemon("pikachu");
    if (pikachuDuplicado !== null) {
      await this.boxService.adicionar(pikachuDuplicado);
    }

    await this.pokeApiService.buscarPokemon("pokemon-inexistente");

    await this.boxService.listar();
    await this.boxService.exibirDetalhes(25);
    await this.boxService.remover(25);
    await this.boxService.listar();
  }
}
