# Star Wars Tributo

Filmes, personagens, planetas, espécies, veículos e naves de Star Wars, com dados da [SWAPI](https://swapi.py4e.com/).

No ar em https://samuelaraag.github.io/star_wars_tribute/

[![Página inicial do Star Wars Tributo](docs/print.jpg)](https://samuelaraag.github.io/star_wars_tribute/)

- Listagem por categoria com paginação na URL (`/people?pagina=2`)
- Detalhe com links para os itens ligados, anterior e próximo, e volta para a página da lista onde o item está
- Transição de hiperespaço entre as telas (View Transitions), desligada para quem prefere menos movimento

## Rodar

Precisa do Node 22.22 ou mais novo.

```bash
npm install
npm start
```

Abre em `http://localhost:4200`. Build com `npm run build`.

## Deploy

Cada push na `main` publica o site no GitHub Pages pelo workflow `.github/workflows/deploy.yml`.

Projeto de fã, sem ligação com a Lucasfilm. Imagens e nomes pertencem aos seus donos.
