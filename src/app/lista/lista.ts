import { httpResource } from '@angular/common/http';
import { Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  API,
  categoria as buscarCategoria,
  idDe,
  Item,
  nomeDe,
  Pagina,
  POR_PAGINA,
  poster,
} from '../swapi';

function paginaValida(valor: unknown): number {
  const numero = Number(valor ?? 1);
  return Number.isInteger(numero) && numero > 0 ? numero : 1;
}

@Component({
  selector: 'app-lista',
  imports: [RouterLink],
  templateUrl: './lista.html',
})
export class Lista {
  readonly categoria = input.required<string>();
  readonly pagina = input(1, { transform: paginaValida });

  private readonly titulo = inject(Title);

  protected readonly config = computed(() => buscarCategoria(this.categoria()));
  protected readonly ehFilme = computed(() => this.categoria() === 'films');
  protected readonly esqueletos = computed(() =>
    Array.from({ length: this.ehFilme() ? 7 : POR_PAGINA }),
  );

  protected readonly dados = httpResource<Pagina>(() =>
    this.config() ? `${API}${this.categoria()}/?page=${this.pagina()}` : undefined,
  );

  protected readonly naoExiste = computed(() => this.dados.statusCode() === 404);

  protected readonly total = computed(() => {
    const dados = this.dados.hasValue() ? this.dados.value() : undefined;
    return dados ? Math.ceil(dados.count / POR_PAGINA) : 0;
  });

  protected readonly nomeDe = nomeDe;
  protected readonly idDe = idDe;
  protected readonly poster = poster;

  constructor() {
    effect(() => {
      const config = this.config();
      this.titulo.setTitle(config ? `${config.nome} · Star Wars Tributo` : 'Star Wars Tributo');
    });
  }

  protected resumo(item: Item): string {
    return this.config()?.resumo(item) ?? '';
  }
}
