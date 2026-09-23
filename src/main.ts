import { PokeApiService } from "./services/PokeApiService";

async function main(): Promise<void> {
  const pokeApiService = new PokeApiService();

  try {
    const pokemon = await pokeApiService.buscar("pikachu");
    console.log(pokemon);
  } catch (erro) {
    if (erro instanceof Error) {
      console.error(erro.message);
    }
  }
}

main();