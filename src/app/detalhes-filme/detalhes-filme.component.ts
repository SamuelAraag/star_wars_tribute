import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

const url = "https://swapi.py4e.com/api/films/";

@Component({
  selector: "app-detalhes-filme",
  templateUrl: "./detalhes-filme.component.html",
  styleUrls: ["./detalhes-filme.component.scss"],
})
export class DetalhesFilmeComponent implements OnInit {
  urlAtual?: String;
  filme: any;

  constructor(private router: Router) {
    router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((x) => (this.urlAtual = x.url));
  }
  ngOnInit() {
    this._obterFilme();
  }
  async _obterFilme() {
    const response = await fetch(url + this.urlAtual)
      .then((res) => res.json())
      .then((data) => data);
    this.filme = response;
    console.log(this.filme);
    debugger;
  }
}
