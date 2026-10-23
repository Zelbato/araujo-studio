import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Services } from '../../sections/services/services';
import { Projects } from '../../sections/projects/projects';
import { Process } from '../../sections/process/process';
import { About } from '../../sections/about/about';
import { Faq } from '../../sections/faq/faq';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, Projects, Process, About, Faq, Contact],
  // As seções abaixo da primeira dobra são pré-renderizadas no HTML (SEO), mas o JavaScript
  // de cada uma só é carregado e hidratado quando ela se aproxima da área visível.
  template: `
    <app-hero />
    @defer (hydrate on viewport) {
      <app-services />
    }
    @defer (hydrate on viewport) {
      <app-projects />
    }
    @defer (hydrate on viewport) {
      <app-process />
    }
    @defer (hydrate on viewport) {
      <app-about />
    }
    @defer (hydrate on viewport) {
      <app-faq />
    }
    <!-- Interação também hidrata: o formulário precisa estar ativo antes do primeiro envio. -->
    @defer (hydrate on viewport; hydrate on interaction) {
      <app-contact />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
