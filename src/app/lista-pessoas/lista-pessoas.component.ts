import { Component, OnInit } from "@angular/core";

const urlPersonagens = "https://swapi.py4e.com/api/people";

@Component({
  selector: "app-lista-pessoas",
  templateUrl: "./lista-pessoas.component.html",
  styleUrls: ["./lista-pessoas.component.scss"],
})
export class ListaPessoasComponent implements OnInit {
  personagens: any;

  ngOnInit(): void {
    this._buscarTodosOsPersonagens();
  }
  async _buscarTodosOsPersonagens() {
    const response = await fetch(urlPersonagens);
    const data = await response.json();
    const results = data.results;
    console.log(results);
    this.personagens = results;
  }
}
