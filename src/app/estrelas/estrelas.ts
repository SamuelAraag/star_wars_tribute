import {
  afterNextRender,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  untracked,
  viewChild,
} from '@angular/core';
import { Hiperespaco } from '../swapi';

const CALMA = 0.0006;
const SALTO = 0.06;

@Component({
  selector: 'app-estrelas',
  template: '<canvas #tela aria-hidden="true"></canvas>',
  styles: `
    canvas {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    }
  `,
})
export class Estrelas {
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('tela');
  private readonly hiperespaco = inject(Hiperespaco);
  private readonly estrelas = Array.from({ length: 260 }, () => ({
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
    z: Math.random(),
  }));
  private velocidade = CALMA;
  private alvo = CALMA;
  private parado = false;

  constructor() {
    const destroy = inject(DestroyRef);

    effect(() => {
      if (this.hiperespaco.saltos() === 0) return;
      untracked(() => this.saltar());
    });

    afterNextRender(() => {
      const canvas = this.canvas().nativeElement;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const movimento = matchMedia('(prefers-reduced-motion: reduce)');
      this.parado = movimento.matches;
      const ajustar = () => {
        canvas.width = innerWidth * devicePixelRatio;
        canvas.height = innerHeight * devicePixelRatio;
      };
      ajustar();
      addEventListener('resize', ajustar);
      const animar = () => {
        this.desenhar(ctx, canvas);
        quadro = requestAnimationFrame(animar);
      };
      let quadro = requestAnimationFrame(animar);
      destroy.onDestroy(() => {
        cancelAnimationFrame(quadro);
        removeEventListener('resize', ajustar);
      });
    });
  }

  private saltar(): void {
    if (this.parado) return;
    this.alvo = SALTO;
    setTimeout(() => (this.alvo = CALMA), 520);
  }

  private desenhar(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    this.velocidade += (this.alvo - this.velocidade) * 0.12;
    const { width: w, height: h } = canvas;
    const cx = w / 2;
    const cy = h / 2;
    ctx.fillStyle = this.velocidade > 0.004 ? 'rgba(13, 13, 13, 0.25)' : 'rgb(13, 13, 13)';
    ctx.fillRect(0, 0, w, h);
    for (const s of this.estrelas) {
      const anterior = s.z;
      if (!this.parado) s.z -= this.velocidade;
      if (s.z <= 0.02) {
        s.x = Math.random() * 2 - 1;
        s.y = Math.random() * 2 - 1;
        s.z = 1;
        continue;
      }
      const brilho = Math.min(1, (1 - s.z) * 1.3);
      ctx.strokeStyle = `rgba(253, 254, 255, ${brilho})`;
      ctx.lineWidth = Math.max(0.6, (1 - s.z) * 2.2) * devicePixelRatio;
      ctx.beginPath();
      ctx.moveTo(cx + (s.x / anterior) * cx, cy + (s.y / anterior) * cy);
      ctx.lineTo(cx + (s.x / s.z) * cx + 0.1, cy + (s.y / s.z) * cy + 0.1);
      ctx.stroke();
    }
  }
}
