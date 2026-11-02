import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIAS } from '../swapi';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home {
  protected readonly categorias = CATEGORIAS;
}
