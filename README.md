# Pokédex TypeScript Lite

Mini-projeto desenvolvido em Node.js e TypeScript para consultar Pokémon na PokeAPI e gerenciar uma coleção local.

## Funcionalidades

- Buscar Pokémon por nome ou ID;
- Adicionar Pokémon ao catálogo;
- Impedir Pokémon duplicados;
- Listar os Pokémon cadastrados;
- Remover Pokémon pelo ID;
- Tratar buscas de Pokémon inexistentes;
- Salvar a coleção localmente em um arquivo JSON.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git e GitHub

## Estrutura do projeto

```text
src/
├── controllers/
│   └── TerminalController.ts
├── models/
│   └── Pokemon.ts
├── services/
│   ├── BoxService.ts
│   └── PokeApiService.ts
├── utils/
│   └── textFormatters.ts
└── main.ts
```

## Como instalar

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/KelwinKlinger/pokedex-typescript-lite.git
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

## Como executar

Para executar o projeto:

```bash
npm run start
```

Para executar em modo de desenvolvimento:

```bash
npm run dev
```

Para compilar o TypeScript:

```bash
npm run build
```

## Armazenamento

Os Pokémon adicionados são armazenados no arquivo:

```text
pc_box.json
```

## Organização do código

- `PokeApiService`: consulta a PokeAPI;
- `BoxService`: gerencia o catálogo local;
- `TerminalController`: coordena as operações do programa;
- `Pokemon`: define o formato dos dados;
- `textFormatters`: formata os Pokémon para exibição.

## Autor

Kelwin Klinger