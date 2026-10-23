import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input, numberAttribute } from '@angular/core';

/**
 * Aparição suave do elemento ao entrar na área visível.
 * O conteúdo permanece visível no HTML pré-renderizado; o efeito só é aplicado no navegador,
 * em elementos ainda fora da tela e quando o usuário não prefere movimento reduzido.
 *
 * Uso: `<div appReveal>` ou `<div [appReveal]="120">` (atraso em ms).
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective {
  readonly delay = input(0, {
    alias: 'appReveal',
    transform: (value: unknown) => numberAttribute(value, 0),
  });

  constructor() {
    const element: HTMLElement = inject(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion || typeof IntersectionObserver === 'undefined') return;
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) return;

      element.style.setProperty('--reveal-delay', `${this.delay()}ms`);
      element.classList.add('reveal-pending');

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          element.classList.replace('reveal-pending', 'reveal-in');
          observer.disconnect();
        },
        { rootMargin: '0px 0px -8% 0px' },
      );

      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
