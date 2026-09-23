import { Pokemon } from "../models/Pokemon";

interface PokeApiResponse {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
}

export class PokeApiService {
  private readonly baseUrl = "https://pokeapi.co/api/v2/pokemon";

  async buscar(nomeOuId: string | number): Promise<Pokemon> {
  const termo = String(nomeOuId).toLowerCase();

  const resposta = await fetch(`${this.baseUrl}/${termo}`);

  if (!resposta.ok) {
    throw new Error("Pokémon não encontrado.");
  }

  const dados = (await resposta.json()) as PokeApiResponse;

  return {
    id: dados.id,
    name: dados.name,
    types: dados.types.map((item) => item.type.name),
    height: dados.height,
    weight: dados.weight,
  };
}
}
