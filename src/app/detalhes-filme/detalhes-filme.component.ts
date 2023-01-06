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
    1: "../assets/imagens/films/wallpaper/0.jpeg",
    2: "../assets/imagens/the_empire_strike_back/frame_the_empire_strike_back.jpeg",
    3: "Detalhes Artigo",
    4: "Categorias",
    5: "Dicas Rápidas",
    6: "Vídeos",
    7: "Webinar",
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
