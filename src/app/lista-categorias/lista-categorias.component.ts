import { Component } from "@angular/core";

const urlFilmes = "https://swapi.py4e.com/api/films";
const urlGeral = "https://swapi.py4e.com/api/";

@Component({
  selector: "app-lista-categorias",
  templateUrl: "./lista-categorias.component.html",
  styleUrls: ["./lista-categorias.component.scss"],
})
export class ListaCategoriasComponent {
  listaDosFilmes: any;
  categorias: any;

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

  async _pegarTodasAsCategorias() {
    const response = await fetch(urlGeral);
    const data = await response.json();
    const results = data;
    this.categorias = this.pegarNomesDasCategorias(results);
    this.categorias = this._formatarTextoComPrimeiraLetraMaiuscula(
      this.categorias
    );
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

  _formatarTextoComPrimeiraLetraMaiuscula(texto: string[]): string[] {
    return texto.map(
      (palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1)
    );
  }
}
