import { Routes } from '@angular/router';
import { Detalhe } from './detalhe/detalhe';
import { Home } from './home/home';
import { Lista } from './lista/lista';

export const routes: Routes = [
  { path: '', component: Home, title: 'Star Wars Tributo' },
  { path: ':categoria', component: Lista },
  { path: ':categoria/:id', component: Detalhe },
  { path: '**', redirectTo: '' },
];
