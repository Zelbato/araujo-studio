import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrowUpRight, Github, LucideAngularModule, Maximize2 } from 'lucide-angular';
import { PROJECTS } from '../../core/content/projects';
import { SITE_CONFIG } from '../../core/config/site.config';
import { ProjectGallery } from '../../shared/components/project-gallery/project-gallery';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ProjectDetails } from './project-details/project-details';

@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule, ProjectGallery, RevealDirective, ProjectDetails],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly githubUrl = SITE_CONFIG.contact.github;
  protected readonly icons = { details: Maximize2, external: ArrowUpRight, github: Github };
}
