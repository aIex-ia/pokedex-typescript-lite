import { join } from "node:path";
import { TerminalController } from "./controllers/TerminalController.js";
import { BoxService } from "./services/BoxService.js";
import { PokeApiService } from "./services/PokeApiService.js";

async function main(): Promise<void> {
  const caminhoBox = join(process.cwd(), "pc_box.json");

  const pokeApiService = new PokeApiService();
  const boxService = new BoxService(caminhoBox);
  const terminalController = new TerminalController(pokeApiService, boxService);

  await terminalController.executarDemonstracao();
}

main().catch((erro: unknown) => {
  console.log("[ERRO] A aplicação foi encerrada inesperadamente.");
  console.error(erro);
});
