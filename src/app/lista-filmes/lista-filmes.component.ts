import { Component, OnInit } from "@angular/core";
import { InicializarOwlCarousel } from "./lista-filmes.owl.carousel";

const urlFilmes = "https://swapi.py4e.com/api/films";

@Component({
  selector: "app-lista-filmes",
  templateUrl: "./lista-filmes.component.html",
  styleUrls: ["./lista-filmes.component.scss"],
})
export class ListaFilmesComponent implements OnInit {
  todosOsFilmes: any;
  carregando = true;

  ngOnInit(): void {
    this._buscarTodosOsFilmes();
  }

  async _buscarTodosOsFilmes() {
    const response = await fetch(urlFilmes);
    const data = await response.json();
    const results = data.results;
    console.log(results);
    this.todosOsFilmes = results;
    InicializarOwlCarousel();
    this.carregando = false
  }
}
