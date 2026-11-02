import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Estrelas } from './estrelas/estrelas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Estrelas],
  templateUrl: './app.html',
})
export class App {}
