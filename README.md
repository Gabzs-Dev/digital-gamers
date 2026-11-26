# DIGITAL GAMERS

## Sobre o projeto

A Digital Gamers é uma aplicação de e-commerce especializada na comercialização de peças para computadores, acessórios e jogos.

O projeto tem como objetivo proporcionar uma experiência intuitiva para o público gamer, permitindo visualizar produtos, adicionar itens ao carrinho e simular a finalização de uma compra.

## Tecnologias utilizadas

- React
- JavaScript
- CSS3
- Vite
- Git
- GitHub
- npm
- Vitest

## Funcionalidades

- Página inicial da loja.
- Catálogo de produtos.
- Visualização de produtos.
- Filtros por categoria.
- Adição e remoção de itens do carrinho.
- Cálculo do valor total.
- Simulação de finalização da compra.

## Requisitos para execução

- Node.js em versão compatível com o Vite.
- npm.
- Visual Studio Code (recomendado).

## Como executar o projeto

1. Clone o repositório:

   `git clone URL_DO_REPOSITORIO`

2. Acesse a pasta:

   `cd digital-gamers`

3. Instale as dependências:

   `npm install`

4. Execute a aplicação:

   `npm run dev`

5. Acesse no navegador o endereço apresentado pelo terminal.

## Testes

Para executar os testes automatizados:

`npm test`

## Compilação

Para verificar a compilação do projeto:

`npm run build`

## Estratégia Git

Foi adotado o Trunk-Based Development simplificado, utilizando a branch main como versão principal e branches de curta duração para o desenvolvimento de novas funcionalidades.

As alterações são submetidas por Pull Requests e revisadas antes da integração.

## Dependências

As dependências e os respectivos comandos de execução estão documentados nos arquivos package.json e package-lock.json.

## Projeto acadêmico

Digital Gamers – Projeto desenvolvido para aplicação prática de metodologias ágeis, Git, GitHub e práticas DevOps.


## Execução com Docker

O projeto Digital Gamers pode ser executado em um contêiner Docker,
utilizando Nginx para disponibilizar os arquivos da aplicação.

### Pré-requisitos
- Docker Desktop instalado e em execução.

### Construir a imagem
```bash
docker build -t digital-gamers:1.0.0 .
```

### Executar o contêiner
```bash
docker run -d --name digital-gamers -p 8080:80 digital-gamers:1.0.0
```

### Acessar a aplicação

http://localhost:8080

### Verificar os contêineres
```bash
docker ps
```

### Parar o contêiner
```bash
docker stop digital-gamers
```

### Remover o contêiner
```bash
docker rm digital-gamers
```
