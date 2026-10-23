import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LucideAngularModule, MessageCircle } from 'lucide-angular';
import { FAQ_ITEMS } from '../../core/content/faq';
import { whatsappUrl } from '../../core/config/site.config';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-faq',
  imports: [LucideAngularModule, RevealDirective],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Faq {
  protected readonly items = FAQ_ITEMS;
  protected readonly whatsappIcon = MessageCircle;
  protected readonly questionUrl = whatsappUrl('Olá, Heitor! Vim pelo seu site e tenho uma dúvida sobre um projeto.');

  /** Índice da pergunta aberta; `null` quando todas estão fechadas. */
  protected readonly openIndex = signal<number | null>(0);

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
