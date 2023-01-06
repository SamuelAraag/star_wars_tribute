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
  urlAtual?: string;

  urlImagemFilme = {
    1: "../assets/imagens/films/wallpaper/0.jpg",
    2: "../assets/imagens/films/wallpaper/1.jpg",
    3: "../assets/imagens/films/wallpaper/2.jpg",
    4: "../assets/imagens/films/wallpaper/3.jpg",
    5: "../assets/imagens/films/wallpaper/4.jpg",
    6: "../assets/imagens/films/wallpaper/5.jpg",
    7: "../assets/imagens/films/wallpaper/6.jpg",
  };

  filme: any;
  imagemFilme?: String;

  constructor(private router: Router) {
    router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((x) => (this.urlAtual = x.url));
  }
  ngOnInit() {
    this._obterFilme();
  }
  async _obterFilme() {
    let idDoFilme = this.urlAtual?.split("/")[2];
    const response = await fetch(url + idDoFilme)
      .then((res) => res.json())
      .then((data) => data);
    this.filme = response;
    console.log(this.filme);
    debugger;
    this._atribuirImagemParaFilmeSelecionado(idDoFilme);
  }

  _atribuirImagemParaFilmeSelecionado(id: any) {
    this.imagemFilme = this.urlImagemFilme[id as keyof object];
  }
}
