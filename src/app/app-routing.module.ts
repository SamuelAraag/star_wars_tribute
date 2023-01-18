import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetalhesFilmeComponent } from "./detalhes-filme/detalhes-filme.component";
import { ListaCategoriasComponent } from "./lista-categorias/lista-categorias.component";
import { ListaFilmesComponent } from "./lista-filmes/lista-filmes.component";
import { ListaPersonagensComponent } from "./lista-personagens/lista-personagens.component";

const routes: Routes = [
  { path: "", component: ListaCategoriasComponent },
  { path: "films", component: ListaFilmesComponent },
  { path: "films/:id", component: DetalhesFilmeComponent },
  { path: "people", component: ListaPersonagensComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
