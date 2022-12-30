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
    debugger;
    this.categorias = this.pegarNomesDasCategorias(results);
  }

  pegarNomesDasCategorias(objeto: any) {
    return Object.getOwnPropertyNames(objeto);
  }
}
