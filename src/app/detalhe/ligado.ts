import { httpResource } from '@angular/common/http';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { idDe, Item, nomeDe, rotaDe } from '../swapi';

@Component({
  selector: 'app-ligado',
  imports: [RouterLink],
  template: `
    @if (item.hasValue()) {
      <a class="chip" [routerLink]="rota()">{{ nome(item.value()) }}</a>
    } @else if (item.error()) {
      <a class="chip" [routerLink]="rota()">#{{ id() }}</a>
    } @else {
      <span class="chip chip--carregando esqueleto" aria-hidden="true"></span>
    }
  `,
})
export class Ligado {
  readonly url = input.required<string>();

  protected readonly item = httpResource<Item>(() => this.url());
  protected readonly rota = () => rotaDe(this.url());
  protected readonly id = () => idDe(this.url());
  protected readonly nome = nomeDe;
}
