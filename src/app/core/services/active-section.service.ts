import { DestroyRef, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SectionId } from '../models/content.models';

/** Identifica qual seção está na área central da tela, para destacar o link ativo. */
@Injectable({ providedIn: 'root' })
export class ActiveSectionService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observer?: IntersectionObserver;

  readonly active = signal<SectionId>('inicio');

  constructor() {
    inject(DestroyRef).onDestroy(() => this.observer?.disconnect());
  }

  observe(ids: SectionId[]): void {
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') return;

    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.active.set(entry.target.id as SectionId);
        }
      },
      // Faixa estreita no meio da viewport: a seção que a cruza é a ativa.
      { rootMargin: '-45% 0px -50% 0px' },
    );

    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) this.observer.observe(element);
    }
  }
}
