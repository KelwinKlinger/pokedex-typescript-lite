import { TerminalController } from "./controllers/TerminalController";
import { PokeApiService } from "./services/PokeApiService";
import { BoxService } from "./services/BoxService";

async function main(): Promise<void> {
  const pokeApiService = new PokeApiService();
  const boxService = new BoxService();

  const controller = new TerminalController(
    pokeApiService,
    boxService
  );

  try {
    await controller.executar();
  } catch (erro) {
    if (erro instanceof Error) {
      console.error(erro.message);
    }
  }
}

main();