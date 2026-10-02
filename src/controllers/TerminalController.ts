import { PokeApiService } from "../services/PokeApiService";
import { BoxService } from "../services/BoxService";
import { formatarPokemon } from "../utils/textFormatters";

export class TerminalController {
  constructor(
    private readonly pokeApiService: PokeApiService,
    private readonly boxService: BoxService,
  ) {}

  async executar(): Promise<void> {
    console.log("=== Pokédex TypeScript Lite ===");

    console.log("\n1. Busca válida e adição:");
    await this.buscarEAdicionar("pikachu");

    console.log("\n2. Tentativa de duplicidade:");
    try {
      await this.buscarEAdicionar("pikachu");
    } catch (erro) {
      if (erro instanceof Error) {
        console.error(erro.message);
      }
    }

    console.log("\n3. Busca inválida:");
    try {
      await this.buscarEAdicionar("pokemon-inexistente");
    } catch (erro) {
      if (erro instanceof Error) {
        console.error(erro.message);
      }
    }

    console.log("\n4. Listagem do catálogo:");
    await this.exibirCatalogo();

    console.log("\n5. Remoção:");
    await this.removerPokemon(25);

    console.log("\n6. Listagem após a remoção:");
    await this.exibirCatalogo();
  }

  private async exibirCatalogo(): Promise<void> {
    const pokemons = await this.boxService.listar();

    if (pokemons.length === 0) {
      console.log("Catálogo vazio.");
      return;
    }

    console.log("Catálogo atual:");

    pokemons.forEach((pokemon) => {
      console.log(formatarPokemon(pokemon));
    });
  }

  private async buscarEAdicionar(nomeOuId: string | number): Promise<void> {
    const pokemon = await this.pokeApiService.buscar(nomeOuId);

    await this.boxService.adicionar(pokemon);

    console.log(`${pokemon.name} foi adicionado à coleção.`);
  }

  private async removerPokemon(id: number): Promise<void> {
    await this.boxService.remover(id);

    console.log(`Pokémon com ID ${id} foi removido da coleção.`);
  }
}
