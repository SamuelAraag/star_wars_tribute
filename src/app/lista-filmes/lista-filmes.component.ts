import { Component, OnInit } from "@angular/core";

const url = "https://swapi.py4e.com/api/films";

@Component({
  selector: "app-lista-filmes",
  templateUrl: "./lista-filmes.component.html",
  styleUrls: ["./lista-filmes.component.scss"],
})
export class ListaFilmesComponent implements OnInit {
  listaDosFilmes: any;



  async ngOnInit() {
    await this._buscarTodosOsFilmes();
  }

  async _buscarTodosOsFilmes() {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    console.log(results);
    this.listaDosFilmes = results;
  }
}
