# Star Wars Tributo

Site de fã para navegar por filmes, personagens, planetas, espécies, veículos e naves de Star Wars. Os dados vêm da [SWAPI](https://swapi.py4e.com/).

**No ar:** https://samuelaraag.github.io/star_wars_tribute/

[![Página inicial do Star Wars Tributo](docs/print.jpg)](https://samuelaraag.github.io/star_wars_tribute/)

## O que tem

- Listagem de cada categoria com paginação. A página fica na URL (`/people?pagina=2`), então dá para compartilhar ou recarregar sem perder onde estava.
- Detalhe de cada item com links para os itens ligados a ele, como os personagens de um filme ou o planeta natal de um personagem.
- Anterior e próximo no detalhe, e um botão que volta para a página da lista onde o item está.
- Estados de carregando, vazio, não encontrado e erro com tentar de novo.
- Transição de hiperespaço entre as telas. Quem ativa a opção de reduzir movimento no sistema vê a troca sem animação.

## Tecnologias

- Angular 22 com componentes standalone, signals e `httpResource`
- View Transitions API, ligada pelo roteador do Angular
- Canvas para o fundo de estrelas
- GitHub Actions publicando no GitHub Pages

## Rodar

Precisa do Node 22.22 ou mais novo.

```bash
npm install
npm start
```

O site abre em `http://localhost:4200`. Para gerar o build, use `npm run build`.

## Deploy

Cada push na `main` publica o site no GitHub Pages pelo workflow `.github/workflows/deploy.yml`.

---

Projeto de fã, sem ligação com a Lucasfilm. Nomes e imagens de Star Wars pertencem aos seus donos.
