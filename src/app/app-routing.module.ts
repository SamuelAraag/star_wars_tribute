import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetalhesFilmeComponent } from "./detalhes-filme/detalhes-filme.component";
import { ListaFilmesComponent } from "./lista-filmes/lista-filmes.component";

const routes: Routes =[
    {path: '', component: ListaFilmesComponent},
    {path: ':id', component: DetalhesFilmeComponent}
];

@NgModule({
declarations: [],
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}