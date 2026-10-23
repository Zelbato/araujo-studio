import { ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import { ArrowUpRight, Github, LucideAngularModule, X } from 'lucide-angular';
import { Project } from '../../../core/models/content.models';
import { ProjectGallery } from '../../../shared/components/project-gallery/project-gallery';

/** Diálogo modal com as informações completas de um projeto. */
@Component({
  selector: 'app-project-details',
  imports: [LucideAngularModule, ProjectGallery],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetails {
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  protected readonly project = signal<Project | null>(null);
  protected readonly icons = { close: X, external: ArrowUpRight, github: Github };

  open(project: Project): void {
    this.project.set(project);
    this.dialog().nativeElement.showModal();
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  /** Clique fora do painel (no backdrop) fecha o diálogo. */
  protected onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) this.close();
  }
}
