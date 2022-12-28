import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ListaFilmesComponent } from "./lista-filmes/lista-filmes.component";
import { DetalhesFilmeComponent } from "./detalhes-filme/detalhes-filme.component";

@NgModule({
  declarations: [AppComponent, ListaFilmesComponent, DetalhesFilmeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
