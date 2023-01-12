import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ListaFilmesComponent } from "./lista-filmes/lista-filmes.component";
import { DetalhesFilmeComponent } from "./detalhes-filme/detalhes-filme.component";
import { CategoriasComponent } from './categorias/categorias.component';
import { CardCategoriasComponent } from './categorias/card-categorias/card-categorias.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';

@NgModule({
  declarations: [AppComponent, ListaFilmesComponent, DetalhesFilmeComponent, CategoriasComponent, CardCategoriasComponent, ListaCategoriasComponent, ListaPessoasComponent, 
],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
