import { Component, Input } from "@angular/core";

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.scss"],
})
export class CategoriasComponent {
  @Input()
  categorias: String[] = [];

  @Input()
  imagensCategorias: {} = {};
}
//films
// :
// "https://swapi.py4e.com/api/films/"
// people
// :
// "https://swapi.py4e.com/api/people/"
// planets
// :
// "https://swapi.py4e.com/api/planets/"
// species
// :
// "https://swapi.py4e.com/api/species/"
// starships
// :
// "https://swapi.py4e.com/api/starships/"
// vehicles
// :
// "https://swapi.py4e.com/api/vehicles/"
