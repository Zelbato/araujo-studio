import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrowDown, ArrowRight, Gauge, Layers, LucideAngularModule, MessagesSquare, PanelsTopLeft } from 'lucide-angular';
import { PROJECTS } from '../../core/content/projects';
import { BrowserFrame } from '../../shared/components/browser-frame/browser-frame';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, BrowserFrame],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly icons = { arrowRight: ArrowRight, arrowDown: ArrowDown, projects: PanelsTopLeft };

  /** A composição visual usa capturas dos dois primeiros projetos reais. */
  protected readonly showcase = PROJECTS.filter((project) => project.images.length)
    .slice(0, 2)
    .map((project) => ({ ...project, image: project.images[0] }));

  protected readonly highlights = [
    { icon: Layers, title: 'Soluções sob medida', text: 'Pensadas para cada necessidade' },
    { icon: Gauge, title: 'Desempenho e qualidade', text: 'Código organizado e eficiente' },
    { icon: MessagesSquare, title: 'Acompanhamento próximo', text: 'Do planejamento à entrega' },
  ];
}
