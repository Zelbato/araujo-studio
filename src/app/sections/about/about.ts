import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrowRight, Github, Linkedin, LucideAngularModule } from 'lucide-angular';
import {
  ABOUT_PARAGRAPHS,
  ABOUT_PHOTO,
  ABOUT_STATEMENT,
  STACK_GROUPS,
  WORK_PRINCIPLES,
} from '../../core/content/about';
import { SITE_CONFIG } from '../../core/config/site.config';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly site = SITE_CONFIG;
  protected readonly paragraphs = ABOUT_PARAGRAPHS;
  protected readonly statement = ABOUT_STATEMENT;
  protected readonly stackGroups = STACK_GROUPS;
  protected readonly principles = WORK_PRINCIPLES;
  protected readonly photo = ABOUT_PHOTO;
  protected readonly icons = { arrowRight: ArrowRight, github: Github, linkedin: Linkedin };
}
