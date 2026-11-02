import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { Component, computed, effect, inject, input, numberAttribute } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  API,
  categoria as buscarCategoria,
  Item,
  LIGACOES,
  nomeDe,
  OrigemLista,
  poster,
  traduzir,
} from '../swapi';
import { Ligado } from './ligado';

@Component({
  selector: 'app-detalhe',
  imports: [RouterLink, Ligado],
  templateUrl: './detalhe.html',
})
export class Detalhe {
  readonly categoria = input.required<string>();
  readonly id = input.required({ transform: (v: unknown) => numberAttribute(v, 0) });

  private readonly origem = inject(OrigemLista);
  private readonly titulo = inject(Title);

  protected readonly config = computed(() => buscarCategoria(this.categoria()));
  protected readonly ehFilme = computed(() => this.categoria() === 'films');

  protected readonly item = httpResource<Item>(() =>
    this.config() && this.id() > 0 ? `${API}${this.categoria()}/${this.id()}/` : undefined,
  );

  protected readonly naoExiste = computed(
    () =>
      !this.config() ||
      this.id() < 1 ||
      (this.item.error() as HttpErrorResponse | undefined)?.status === 404,
  );

  protected readonly paginaOrigem = computed(() => {
    const pagina = this.origem.pagina(this.categoria());
    return pagina > 1 ? pagina : null;
  });

  protected readonly todos = computed(() => {
    const config = this.config();
    if (!config) return '';
    return `${config.masculino ? 'Todos os' : 'Todas as'} ${config.nome.toLowerCase()}`;
  });

  protected readonly ligacoes = computed(() => {
    if (!this.item.hasValue()) return [];
    const item = this.item.value();
    return LIGACOES.filter(([campo]) => campo !== this.categoria())
      .map(([campo, rotulo]) => ({
        rotulo,
        urls: [item[campo]].flat().filter(Boolean) as string[],
      }))
      .filter((grupo) => grupo.urls.length);
  });

  protected readonly crawl = computed(() =>
    this.item.hasValue()
      ? String(this.item.value()['opening_crawl'] ?? '')
          .replace(/\r\n\r\n/g, '\n\n')
          .replace(/\r\n/g, ' ')
      : '',
  );

  protected readonly nomeDe = nomeDe;
  protected readonly traduzir = traduzir;
  protected readonly poster = poster;

  constructor() {
    effect(() => {
      const nome = this.item.hasValue() ? nomeDe(this.item.value()) : this.config()?.nome;
      this.titulo.setTitle(nome ? `${nome} · Star Wars Tributo` : 'Star Wars Tributo');
    });
  }
}
