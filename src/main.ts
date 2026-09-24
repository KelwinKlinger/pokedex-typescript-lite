import { PokeApiService } from "./services/PokeApiService";
import { BoxService } from "./services/BoxService";
import { formatarPokemon } from "./utils/textFormatters";

async function main(): Promise<void> {
  const pokeApiService = new PokeApiService();
  const boxService = new BoxService();

  try {
    const pokemons = await boxService.listar();

    if (pokemons.length === 0) {
      console.log("Catálogo vazio.");
      return;
    }

    console.log("Catálogo atual:");

    pokemons.forEach((pokemon) => {
      console.log(formatarPokemon(pokemon));
    });
  } catch (erro) {
    if (erro instanceof Error) {
      console.error(erro.message);
    }
  }
}

main();