# Pokédex TypeScript Lite

## Sobre o projeto

O **Pokédex TypeScript Lite** é uma aplicação simples em **Node.js com TypeScript** que consulta dados de Pokémon na **PokeAPI**, transforma a resposta em um objeto simplificado e organiza os resultados em um catálogo local usando o arquivo `pc_box.json`.

O projeto é executado pelo terminal e foi desenvolvido como mini-projeto avaliativo do Módulo 01.

## Objetivo

Praticar os principais conceitos estudados no módulo:

- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays e objetos;
- JSON;
- métodos de array;
- classes;
- modificadores de acesso;
- async/await;
- fetch;
- tratamento de erros;
- organização em camadas;
- GitHub;
- GitFlow;
- Kanban.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm
- Git

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/aIex-ia/pokedex-typescript-lite.git
```

Acesse a pasta do projeto:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

## Como executar

Execute o projeto pelo terminal:

```bash
npm run start
```

Também é possível executar em ambiente de desenvolvimento com:

```bash
npm run dev
```

Para compilar o TypeScript:

```bash
npm run build
```

## Estrutura do projeto

```text
pokedex-typescript-lite/
│
├── src/
│   ├── main.ts
│   ├── controllers/
│   │   └── TerminalController.ts
│   ├── services/
│   │   ├── PokeApiService.ts
│   │   └── BoxService.ts
│   ├── models/
│   │   ├── Pokemon.ts
│   │   └── CustomErrors.ts
│   └── utils/
│       └── textFormatters.ts
│
├── pc_box.json
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Funcionalidades

- Buscar Pokémon por nome ou ID;
- Tratar erro de Pokémon inexistente;
- Transformar resposta da API em objeto simplificado;
- Adicionar Pokémon ao catálogo local;
- Impedir Pokémon duplicado pelo ID;
- Listar catálogo;
- Remover Pokémon por ID;
- Exibir mensagens claras no terminal;
- Salvar os dados no arquivo `pc_box.json`.

## Exemplos de execução

### Busca válida

Entrada testada:

```text
pikachu
```

Saída esperada:

```text
[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

### Busca inválida

Entrada testada:

```text
pokemon-inexistente
```

Saída esperada:

```text
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

### Duplicidade

Entrada testada:

```text
adicionar pikachu duas vezes
```

Saída esperada:

```text
[AVISO] pikachu já está no catálogo.
```

### Remoção

Entrada testada:

```text
remover ID 25
```

Saída esperada:

```text
[OK] Pokémon removido do catálogo.
```

## Conceitos aplicados

### TypeScript

O projeto utiliza TypeScript em todos os arquivos `.ts`, com `strict` habilitado no `tsconfig.json`.

### Interfaces

As interfaces `PokemonResumo` e `PokemonApiResponse` foram criadas no arquivo `src/models/Pokemon.ts` para tipar os dados usados internamente e os dados recebidos da PokeAPI.

### Fetch e async/await

A classe `PokeApiService` utiliza `fetch` com `async/await` para consultar a PokeAPI pelo nome ou ID do Pokémon.

### Tratamento de erros

A busca trata erros com `try/catch`. Quando o Pokémon não existe, o sistema exibe uma mensagem clara e retorna `null`, sem quebrar a execução.

### Métodos de array

Foram utilizados métodos como:

- `map`: transformar os tipos da API em uma lista de nomes;
- `find`: encontrar stats e buscar Pokémon por ID;
- `some`: verificar duplicidade;
- `filter`: remover Pokémon pelo ID;
- `forEach`: listar Pokémon no terminal;
- `reduce`: calcular o peso total dos Pokémon no catálogo.

### Classes

Foram criadas classes para separar responsabilidades:

- `PokeApiService`: integração com a API externa;
- `BoxService`: persistência local e manipulação do catálogo;
- `TerminalController`: organização do fluxo exibido no terminal.

## Organização do Kanban

Link do Kanban:

```text
https://trello.com/invite/b/6a25bc66eae0e06c5c9ce4ca/ATTI52f3db5af76f66a3cf7b2c85f0c2357fC5EEE13F/projeto-pokedex-typescript
```

Colunas utilizadas:

- Backlog
- A Fazer
- Em Andamento
- Concluído

Tarefas principais:

- Criar repositório no GitHub;
- Configurar projeto Node com TypeScript;
- Criar interfaces de Pokémon;
- Criar serviço de busca na PokeAPI;
- Tratar erro de Pokémon inexistente;
- Criar catálogo local;
- Bloquear Pokémon duplicado;
- Criar listagem do catálogo;
- Criar remoção por ID;
- Testar fluxo no `main.ts`;
- Atualizar README.md;
- Enviar links no AVA.

## Branches utilizadas

- `main`
- `develop`
- `feat/pokedex`
- `docs/readme`

## Sugestão de commits

```bash
git commit -m "feat: configura projeto com typescript"
git commit -m "feat: cria interfaces de pokemon"
git commit -m "feat: implementa busca na pokeapi"
git commit -m "feat: cria servico de catalogo"
git commit -m "fix: trata pokemon inexistente"
git commit -m "docs: atualiza readme com instrucoes"
```

## Melhorias futuras

- Criar menu interativo no terminal;
- Criar filtros por tipo de Pokémon;
- Melhorar exibição das estatísticas;
- Criar uma API própria com Express;
- Criar testes automatizados.
