import { ChangeDetectionStrategy, Component, computed, input, linkedSignal } from '@angular/core';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';
import { ProjectImage } from '../../../core/models/content.models';
import { BrowserFrame } from '../browser-frame/browser-frame';

/**
 * Carrossel de capturas de um projeto, dentro da moldura de navegador.
 * Navegação por botões, indicadores, setas do teclado e gesto de deslizar. Sem troca automática.
 */
@Component({
  selector: 'app-project-gallery',
  imports: [LucideAngularModule, BrowserFrame],
  templateUrl: './project-gallery.html',
  styleUrl: './project-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectGallery {
  readonly images = input.required<ProjectImage[]>();
  readonly label = input.required<string>();
  /** Valor do atributo `sizes` das imagens. */
  readonly sizes = input('100vw');

  protected readonly icons = { prev: ChevronLeft, next: ChevronRight };
  /** Volta à primeira imagem sempre que a lista muda (ex.: outro projeto no diálogo). */
  protected readonly index = linkedSignal({ source: this.images, computation: () => 0 });
  protected readonly current = computed(() => this.images()[this.index()]);

  private pointerStartX: number | null = null;

  protected srcset(image: ProjectImage): string {
    return image.widths.map((w) => `${image.basePath}-${w}.webp ${w}w`).join(', ');
  }

  protected src(image: ProjectImage): string {
    return `${image.basePath}-${Math.max(...image.widths)}.webp`;
  }

  protected goTo(index: number): void {
    const total = this.images().length;
    this.index.set((index + total) % total);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') this.goTo(this.index() - 1);
    else if (event.key === 'ArrowRight') this.goTo(this.index() + 1);
    else return;
    event.preventDefault();
  }

  protected onPointerDown(event: PointerEvent): void {
    this.pointerStartX = event.clientX;
  }

  protected onPointerUp(event: PointerEvent): void {
    if (this.pointerStartX === null) return;
    const distance = event.clientX - this.pointerStartX;
    this.pointerStartX = null;
    if (Math.abs(distance) > 40) this.goTo(this.index() + (distance < 0 ? 1 : -1));
  }
}
