import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrowRight, Check, LucideAngularModule } from 'lucide-angular';
import { SERVICES } from '../../core/content/services';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services',
  imports: [LucideAngularModule, RevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  protected readonly services = SERVICES;
  protected readonly icons = { arrowRight: ArrowRight, check: Check };
}
