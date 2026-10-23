import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';
import { NAV_ITEMS } from '../../core/content/navigation';
import { SITE_CONFIG } from '../../core/config/site.config';
import { ActiveSectionService } from '../../core/services/active-section.service';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'onEscape()',
  },
})
export class Header {
  private readonly document = inject(DOCUMENT);
  private readonly toggleButton = viewChild.required<ElementRef<HTMLButtonElement>>('toggle');

  protected readonly site = SITE_CONFIG;
  protected readonly navItems = NAV_ITEMS;
  protected readonly arrowIcon = ArrowRight;
  protected readonly active = inject(ActiveSectionService).active;
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  constructor() {
    const sections = inject(ActiveSectionService);
    const destroyRef = inject(DestroyRef);

    effect(() => this.document.body.classList.toggle('is-locked', this.menuOpen()));

    afterNextRender(() => {
      sections.observe([...NAV_ITEMS.map((item) => item.id), 'faq']);

      const onScroll = () => this.scrolled.set(window.scrollY > 12);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });

      // Ao alcançar a largura do menu completo, o menu mobile deixa de fazer sentido.
      const desktop = window.matchMedia('(min-width: 1024px)');
      const onBreakpoint = (event: MediaQueryListEvent) => event.matches && this.menuOpen.set(false);
      desktop.addEventListener('change', onBreakpoint);

      destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        desktop.removeEventListener('change', onBreakpoint);
      });
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onEscape(): void {
    if (!this.menuOpen()) return;
    this.closeMenu();
    this.toggleButton().nativeElement.focus();
  }
}
