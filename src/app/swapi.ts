import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { of, tap } from 'rxjs';

export const API = 'https://swapi.py4e.com/api/';
export const POR_PAGINA = 10;

export type Item = Record<string, unknown> & { url: string; name?: string; title?: string };

export interface Pagina {
  count: number;
  results: Item[];
}

export interface Categoria {
  chave: string;
  nome: string;
  singular: string;
  masculino: boolean;
  resumo: (item: Item) => string;
  ficha: [string, string][];
}

const dicionario: Record<string, string> = {
  male: 'masculino',
  female: 'feminino',
  'n/a': 'não se aplica',
  unknown: 'desconhecido',
  none: 'nenhum',
  hermaphrodite: 'hermafrodita',
  arid: 'árido',
  temperate: 'temperado',
  frozen: 'gelado',
  murky: 'pantanoso',
  tropical: 'tropical',
  mammal: 'mamífero',
  artificial: 'artificial',
  reptile: 'réptil',
  sentient: 'senciente',
};

export function traduzir(valor: unknown): string {
  const texto = String(valor ?? '');
  if (/^\d+$/.test(texto)) return Number(texto).toLocaleString('pt-BR');
  return dicionario[texto] ?? texto;
}

const texto = (item: Item, campo: string) => traduzir(item[campo]);

export const CATEGORIAS: Categoria[] = [
  {
    chave: 'films',
    nome: 'Filmes',
    singular: 'filme',
    masculino: true,
    resumo: (i) => `Episódio ${i['episode_id']} · ${String(i['release_date']).slice(0, 4)}`,
    ficha: [
      ['director', 'Direção'],
      ['producer', 'Produção'],
      ['release_date', 'Lançamento'],
    ],
  },
  {
    chave: 'people',
    nome: 'Personagens',
    singular: 'personagem',
    masculino: true,
    resumo: (i) => `Nascimento ${texto(i, 'birth_year')} · ${texto(i, 'gender')}`,
    ficha: [
      ['birth_year', 'Nascimento'],
      ['gender', 'Gênero'],
      ['height', 'Altura (cm)'],
      ['mass', 'Peso (kg)'],
      ['hair_color', 'Cabelo'],
      ['eye_color', 'Olhos'],
    ],
  },
  {
    chave: 'planets',
    nome: 'Planetas',
    singular: 'planeta',
    masculino: true,
    resumo: (i) => `Clima ${texto(i, 'climate')} · População ${texto(i, 'population')}`,
    ficha: [
      ['climate', 'Clima'],
      ['terrain', 'Terreno'],
      ['population', 'População'],
      ['diameter', 'Diâmetro (km)'],
      ['gravity', 'Gravidade'],
      ['orbital_period', 'Ano (dias)'],
    ],
  },
  {
    chave: 'species',
    nome: 'Espécies',
    singular: 'espécie',
    masculino: false,
    resumo: (i) => `${texto(i, 'classification')} · ${texto(i, 'language')}`,
    ficha: [
      ['classification', 'Classificação'],
      ['designation', 'Designação'],
      ['language', 'Idioma'],
      ['average_height', 'Altura média (cm)'],
      ['average_lifespan', 'Vida média (anos)'],
    ],
  },
  {
    chave: 'vehicles',
    nome: 'Veículos',
    singular: 'veículo',
    masculino: true,
    resumo: (i) => `${i['model']} · ${texto(i, 'vehicle_class')}`,
    ficha: [
      ['model', 'Modelo'],
      ['manufacturer', 'Fabricante'],
      ['vehicle_class', 'Classe'],
      ['crew', 'Tripulação'],
      ['passengers', 'Passageiros'],
      ['max_atmosphering_speed', 'Velocidade máx.'],
    ],
  },
  {
    chave: 'starships',
    nome: 'Naves',
    singular: 'nave',
    masculino: false,
    resumo: (i) => `${i['model']} · ${texto(i, 'starship_class')}`,
    ficha: [
      ['model', 'Modelo'],
      ['manufacturer', 'Fabricante'],
      ['starship_class', 'Classe'],
      ['hyperdrive_rating', 'Hiperpropulsor'],
      ['crew', 'Tripulação'],
      ['passengers', 'Passageiros'],
    ],
  },
];

export const LIGACOES: [string, string][] = [
  ['characters', 'Personagens'],
  ['people', 'Personagens'],
  ['residents', 'Moradores'],
  ['pilots', 'Pilotos'],
  ['homeworld', 'Planeta natal'],
  ['films', 'Filmes'],
  ['planets', 'Planetas'],
  ['species', 'Espécies'],
  ['vehicles', 'Veículos'],
  ['starships', 'Naves'],
];

export function categoria(chave: string | undefined): Categoria | undefined {
  return CATEGORIAS.find((c) => c.chave === chave);
}

export function nomeDe(item: Item): string {
  return item.name ?? item.title ?? '';
}

export function rotaDe(url: string): string[] {
  const [chave, id] = url.replace(API, '').split('/');
  return ['/', chave, id];
}

export function idDe(url: string): string {
  return url.replace(API, '').split('/')[1];
}

export function poster(id: string | number): string {
  return `assets/filmes/${id}.jpg`;
}

const respostas = new Map<string, HttpResponse<unknown>>();

export const cacheSwapi: HttpInterceptorFn = (req, next) => {
  if (req.method !== 'GET' || !req.url.startsWith(API)) return next(req);
  const guardada = respostas.get(req.urlWithParams);
  if (guardada) return of(guardada.clone());
  return next(req).pipe(
    tap((evento) => {
      if (evento instanceof HttpResponse && evento.ok) respostas.set(req.urlWithParams, evento);
    }),
  );
};

@Injectable({ providedIn: 'root' })
export class OrigemLista {
  private readonly paginas = signal<Record<string, number>>({});

  pagina(chave: string): number {
    return this.paginas()[chave] ?? 1;
  }

  guardar(chave: string, pagina: number): void {
    this.paginas.update((atual) => ({ ...atual, [chave]: pagina }));
  }
}

@Injectable({ providedIn: 'root' })
export class Hiperespaco {
  readonly saltos = signal(0);

  saltar(): void {
    this.saltos.update((n) => n + 1);
  }
}
