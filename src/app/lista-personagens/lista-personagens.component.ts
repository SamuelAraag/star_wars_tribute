import { Component, OnInit } from "@angular/core";

const urlPersonagens = "https://swapi.py4e.com/api/people";
const API_KEY = "ed3f37d04d7312de08330c744fadfc0b";
const FLICKR_API_URL = "https://api.flickr.com/services/rest/";

const SEGREDO = "c553ba6c7c33b302";

@Component({
  selector: "app-lista-pessoas",
  templateUrl: "./lista-personagens.component.html",
  styleUrls: ["./lista-personagens.component.scss"],
})
export class ListaPersonagensComponent implements OnInit {
  personagens: any;

  ngOnInit(): void {
    this._buscarTodosOsPersonagens();
    this.searchImagesByName("DarthVader");
  }

  async _buscarTodosOsPersonagens() {
    const response = await fetch(urlPersonagens);
    const data = await response.json();
    const results = data.results;
    console.log(results);
    this.personagens = results;
  }

  searchImagesByName(nomePesquisa: string) {
    const url =
      FLICKR_API_URL +
      "?method=flickr.photos.search&api_key=" +
      API_KEY +
      "&text=" +
      nomePesquisa +
      "&format=json&nojsoncallback=1";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.showImage(data.photos.photo[0]);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  showImage(ObjetoImagem: any) {
    const imageUrl =
      "https://farm" +
      ObjetoImagem.farm +
      ".staticflickr.com/" +
      ObjetoImagem.server +
      "/" +
      ObjetoImagem.id +
      "_" +
      ObjetoImagem.secret +
      ".jpg";
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", imageUrl);
    document.body.appendChild(imageElement);
  }
}
