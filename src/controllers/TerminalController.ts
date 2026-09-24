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

    await this.buscarEAdicionar("pikachu");
    await this.exibirCatalogo();

    await this.removerPokemon(25);
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
