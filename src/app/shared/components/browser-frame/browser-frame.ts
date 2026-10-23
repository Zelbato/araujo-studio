import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ImageOff, LucideAngularModule } from 'lucide-angular';
import { ProjectImage } from '../../../core/models/content.models';

/**
 * Moldura de navegador para exibir capturas reais de projetos.
 * Sem `image`, projeta o conteúdo recebido (ex.: carrossel); com `image = null`, exibe a área reservada.
 */
@Component({
  selector: 'app-browser-frame',
  imports: [LucideAngularModule],
  templateUrl: './browser-frame.html',
  styleUrl: './browser-frame.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowserFrame {
  readonly image = input<ProjectImage | null | undefined>(undefined);
  readonly label = input.required<string>();
  /** Valor do atributo `sizes` da imagem. */
  readonly sizes = input('100vw');
  /** Imagens da primeira dobra: carregamento imediato e prioridade alta. */
  readonly priority = input(false);

  protected readonly placeholderIcon = ImageOff;

  protected readonly src = computed(() => {
    const image = this.image();
    return image ? `${image.basePath}-${Math.max(...image.widths)}.webp` : '';
  });

  protected readonly srcset = computed(() => {
    const image = this.image();
    return image ? image.widths.map((w) => `${image.basePath}-${w}.webp ${w}w`).join(', ') : '';
  });
}
