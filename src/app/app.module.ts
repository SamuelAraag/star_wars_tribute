import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ListaFilmesComponent } from "./lista-filmes/lista-filmes.component";
import { DetalhesFilmeComponent } from "./detalhes-filme/detalhes-filme.component";
import { CategoriasComponent } from './categorias/categorias.component';
import { CardCategoriasComponent } from './categorias/card-categorias/card-categorias.component';

@NgModule({
  declarations: [AppComponent, ListaFilmesComponent, DetalhesFilmeComponent, CategoriasComponent, CardCategoriasComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
