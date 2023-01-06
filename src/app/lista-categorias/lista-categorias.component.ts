import { Component } from "@angular/core";

const urlGeral = "https://swapi.py4e.com/api/vehicles";
// const urlFilmes = "https://swapi.py4e.com/api/films";
// const urlGeral = "https://swapi.py4e.com/api/";

@Component({
  selector: "app-lista-categorias",
  templateUrl: "./lista-categorias.component.html",
  styleUrls: ["./lista-categorias.component.scss"],
})
export class ListaCategoriasComponent {
  listaDosFilmes: any;
  categorias: any;

  //   nomesDasCategoriasTraduzido: string[] = []
  // :
  // "people"
  // 1
  // :
  // "planets"
  // 2
  // :
  // "films"
  // 3
  // :
  // "species"
  // 4
  // :
  // "vehicles"
  // 5
  // :
  // "starships"

  imagensCategorias: any[] = [
    "../../assets/imagens/categorias/people.jpg",
    "../../assets/imagens/categorias/planets.jpeg",
    "../../assets/imagens/categorias/films.jpeg",
    "../../assets/imagens/categorias/species.png",
    "../../assets/imagens/categorias/vehicles.jpg",
    "../../assets/imagens/categorias/starships.jpg",
  ];

  ngOnInit() {
    this._pegarTodasAsCategorias();
    this.pegarNomesDasCategorias(this.listaDosFilmes);
  }

  // async _buscarTodosOsFilmes() {
  //   const response = await fetch(urlFilmes);
  //   const data = await response.json();
  //   const results = data.results;
  //   console.log(results);
  //   this.listaDosFilmes = results;
  // }

  async _pegarTodasAsCategorias() {
    const response = await fetch(urlGeral);
    const data = await response.json();
    const results = data;
    console.log(results);
    this.categorias = this.pegarNomesDasCategorias(results);
    debugger;
    this.imagensCategorias;
  }

  pegarNomesDasCategorias(objeto: any) {
    return Object.getOwnPropertyNames(objeto);
  }

  abrirCategoria(categoria: any) {
    this._buscarCategoriaSelecionada(categoria);

    alert("Não implementado");
  }

  async _buscarCategoriaSelecionada(categoria: any) {
    const response = await fetch(urlGeral + "/" + categoria);
    const data = await response.json();
    const results = data.results;
    console.log(results);
    this.listaDosFilmes = results;
  }
}
