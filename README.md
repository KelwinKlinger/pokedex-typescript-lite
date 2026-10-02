# Pokédex TypeScript Lite

Mini-projeto desenvolvido em Node.js e TypeScript para consultar Pokémon na PokeAPI e gerenciar uma coleção local persistida em arquivo JSON.

## Objetivo

Aplicar conceitos de TypeScript, programação orientada a objetos, consumo de API, programação assíncrona, tratamento de erros, manipulação de arrays e persistência de dados em um projeto executado pelo terminal.

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

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Node.js;
- NPM;
- Git.

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

## Exemplos de execução

### Busca válida

O programa busca o Pikachu na PokeAPI e o adiciona ao catálogo:

```text
1. Busca válida e adição:
pikachu foi adicionado à coleção.
```

### Tentativa de duplicidade

Ao tentar adicionar o mesmo Pokémon novamente:

```text
2. Tentativa de duplicidade:
Este Pokémon já está na coleção.
```

### Busca inválida

Ao buscar um Pokémon inexistente:

```text
3. Busca inválida:
Pokémon não encontrado.
```

### Listagem

```text
4. Listagem do catálogo:
Catálogo atual:
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

### Remoção

```text
5. Remoção:
Pokémon com ID 25 foi removido da coleção.
```

Depois da remoção:

```text
6. Listagem após a remoção:
Catálogo vazio.
```

## Armazenamento

Os Pokémon adicionados são armazenados localmente no arquivo:

```text
pc_box.json
```

A aplicação lê e atualiza esse arquivo durante as operações de adição, listagem e remoção.

## Organização do código

- `PokeApiService`: consulta a PokeAPI e converte a resposta para o formato utilizado pela aplicação;
- `BoxService`: gerencia o catálogo armazenado no arquivo JSON;
- `TerminalController`: coordena e demonstra as operações do programa;
- `Pokemon`: define o formato dos dados de um Pokémon;
- `textFormatters`: formata os Pokémon para exibição no terminal;
- `main.ts`: cria as instâncias e inicia a aplicação.

## Conceitos aplicados

- Tipagem com TypeScript;
- Interfaces;
- Classes e objetos;
- Construtores;
- Modificadores de acesso;
- Métodos;
- Arrays e métodos `map`, `some`, `forEach` e `filter`;
- Funções assíncronas;
- `Promise`, `async` e `await`;
- Consumo de API com `fetch`;
- Tratamento de erros com `throw`, `try` e `catch`;
- Leitura e escrita de arquivos;
- Persistência de dados em JSON;
- Separação de responsabilidades.

## Branches utilizadas

- `main`: versão estável e final do projeto;
- `develop`: integração das funcionalidades;
- `feature/model-pokemon`: criação do modelo de Pokémon;
- `feat/pokedex`: implementação das funcionalidades principais;
- `docs/readme`: criação e atualização da documentação;
- `fix/revisao-final`: correções realizadas durante a revisão final.

## Melhorias futuras

- Criar um menu interativo no terminal;
- Permitir que o usuário escolha o Pokémon durante a execução;
- Criar testes automatizados;
- Validar entradas informadas pelo usuário;
- Implementar novas formas de busca e filtragem;
- Utilizar um banco de dados no lugar do arquivo JSON.

## Planejamento

O desenvolvimento foi organizado em um quadro Kanban no GitHub Projects:

[Visualizar quadro Kanban](https://github.com/users/KelwinKlinger/projects/1/views/1)

## Autor

Kelwin Klinger