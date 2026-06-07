import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { LocalBoxError } from "../models/CustomErrors.js";
import { PokemonResumo } from "../models/Pokemon.js";
import { formatarDetalhesPokemon, formatarPokemon } from "../utils/textFormatters.js";

export class BoxService {
  constructor(private readonly caminhoArquivo: string) {}

  public async iniciarBox(): Promise<void> {
    if (!existsSync(this.caminhoArquivo)) {
      await writeFile(this.caminhoArquivo, "[]", "utf-8");
    }
  }

  public async adicionar(pokemon: PokemonResumo): Promise<void> {
    const catalogo = await this.lerCatalogo();
    const jaExiste = catalogo.some((item) => item.id === pokemon.id);

    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }

    const catalogoAtualizado = [...catalogo, pokemon];
    await this.salvarCatalogo(catalogoAtualizado);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  }

  public async listar(): Promise<void> {
    const catalogo = await this.lerCatalogo();

    if (catalogo.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return;
    }

    console.log("\nCatálogo atual:");
    catalogo.forEach((pokemon) => {
      console.log(formatarPokemon(pokemon));
    });

    const pesoTotal = catalogo.reduce((total, pokemon) => total + pokemon.peso, 0);
    console.log(`Peso total dos Pokémon no catálogo: ${pesoTotal}`);
  }

  public async remover(id: number): Promise<void> {
    const catalogo = await this.lerCatalogo();
    const existe = catalogo.some((pokemon) => pokemon.id === id);

    if (!existe) {
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
      return;
    }

    const catalogoAtualizado = catalogo.filter((pokemon) => pokemon.id !== id);
    await this.salvarCatalogo(catalogoAtualizado);
    console.log("[OK] Pokémon removido do catálogo.");
  }

  public async exibirDetalhes(id: number): Promise<void> {
    const catalogo = await this.lerCatalogo();
    const pokemon = catalogo.find((item) => item.id === id);

    if (!pokemon) {
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
      return;
    }

    console.log(formatarDetalhesPokemon(pokemon));
  }

  private async lerCatalogo(): Promise<PokemonResumo[]> {
    try {
      await this.iniciarBox();
      const conteudo = await readFile(this.caminhoArquivo, "utf-8");
      return JSON.parse(conteudo) as PokemonResumo[];
    } catch {
      throw new LocalBoxError("Não foi possível ler o arquivo pc_box.json.");
    }
  }

  private async salvarCatalogo(catalogo: PokemonResumo[]): Promise<void> {
    try {
      await writeFile(this.caminhoArquivo, JSON.stringify(catalogo, null, 2), "utf-8");
    } catch {
      throw new LocalBoxError("Não foi possível salvar o arquivo pc_box.json.");
    }
  }
}
