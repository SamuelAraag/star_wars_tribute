import { Component, OnInit } from "@angular/core";

const urlFilmes = "https://swapi.py4e.com/api/films";
const urlGeral = "https://swapi.py4e.com/api/";

@Component({
  selector: "app-lista-filmes",
  templateUrl: "./lista-filmes.component.html",
  styleUrls: ["./lista-filmes.component.scss"],
})
export class ListaFilmesComponent implements OnInit {
  listaDosFilmes: any;
  categorias: any;

  imagensCategorias: any[] = [
    '../../assets/imagens/categorias/people.jpg',
    '../../assets/imagens/categorias/planets.jpeg',
    '../../assets/imagens/categorias/films.jpeg',
    '../../assets/imagens/categorias/species.png',
    '../../assets/imagens/categorias/starships.jpg',
    '../../assets/imagens/categorias/vehicles.jpg',
  ];

  ngOnInit() {
    this._pegarTodasAsCategorias();
  }

  async _buscarTodosOsFilmes() {
    const response = await fetch(urlFilmes);
    const data = await response.json();
    const results = data.results;
    console.log(results);
    this.listaDosFilmes = results;
  }

  async _pegarTodasAsCategorias() {
    const response = await fetch(urlGeral);
    const data = await response.json();
    const results = data;
    console.log(results);
    this.categorias = this.pegarNomesDasCategorias(results);
    this.imagensCategorias;
    debugger;
  }

  pegarNomesDasCategorias(objeto: any) {
    return Object.getOwnPropertyNames(objeto);
  }
}
