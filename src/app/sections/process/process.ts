import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { PROCESS_STEPS } from '../../core/content/process';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-process',
  imports: [LucideAngularModule, RevealDirective],
  templateUrl: './process.html',
  styleUrl: './process.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Process {
  protected readonly steps = PROCESS_STEPS;
}
