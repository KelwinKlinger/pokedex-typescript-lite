import { readFile, writeFile } from "node:fs/promises";
import { Pokemon } from "../models/Pokemon";

export class BoxService {
  private readonly caminhoArquivo = "pc_box.json";

  async listar(): Promise<Pokemon[]> {
    const conteudo = await readFile(this.caminhoArquivo, "utf-8");

    return JSON.parse(conteudo) as Pokemon[];
  }

  private async salvar(pokemons: Pokemon[]): Promise<void> {
    const conteudo = JSON.stringify(pokemons, null, 2);

    await writeFile(this.caminhoArquivo, conteudo, "utf-8");
  }

  async adicionar(pokemon: Pokemon): Promise<void> {
    const pokemons = await this.listar();

    const duplicado = pokemons.some((item) => item.id === pokemon.id);

    if (duplicado) {
      throw new Error("Este Pokémon já está na coleção.");
    }

    pokemons.push(pokemon);

    await this.salvar(pokemons);
  }

  async remover(id: number): Promise<void> {
    const pokemons = await this.listar();

    const existe = pokemons.some((pokemon) => pokemon.id === id);

    if (!existe) {
      throw new Error("Nenhum Pokémon encontrado com esse ID.");
    }

    const pokemonsAtualizados = pokemons.filter((pokemon) => pokemon.id !== id);

    await this.salvar(pokemonsAtualizados);
  }
}
