import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  LucideAngularModule,
  LucideIconData,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-angular';
import {
  SITE_CONFIG,
  formatPhoneBR,
  mailtoUrl,
  profileHandle,
  whatsappUrl,
} from '../../core/config/site.config';
import { buildContactMessage, createProtocol } from '../../core/utils/contact-message';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface Channel {
  label: string;
  value: string;
  href: string;
  icon: LucideIconData;
  external: boolean;
}

type SendChannel = 'whatsapp' | 'email';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule, ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly host: HTMLElement = inject(ElementRef).nativeElement;
  private readonly contact = SITE_CONFIG.contact;

  protected readonly icons = { whatsapp: MessageCircle, mail: Mail, send: Send, external: ArrowUpRight };
  protected readonly whatsappHref = this.contact.whatsapp ? whatsappUrl() : '';
  protected readonly emailHref = this.contact.email
    ? mailtoUrl('Contato pelo site', 'Olá, Heitor! Vim pelo seu site e gostaria de conversar sobre um projeto.')
    : '';

  protected readonly projectTypes = [
    'Site ou landing page',
    'Sistema personalizado',
    'API ou integração',
    'Aplicativo mobile',
    'Ainda não sei',
  ];

  /** Canais exibidos: itens sem valor configurado são omitidos. */
  protected readonly channels: Channel[] = (
    [
      {
        label: 'WhatsApp',
        value: formatPhoneBR(this.contact.whatsapp),
        href: this.whatsappHref,
        icon: MessageCircle,
        external: true,
      },
      { label: 'E-mail', value: this.contact.email, href: this.emailHref, icon: Mail, external: false },
      {
        label: 'LinkedIn',
        value: `/in/${profileHandle(this.contact.linkedin)}`,
        href: this.contact.linkedin,
        icon: Linkedin,
        external: true,
      },
      {
        label: 'Instagram',
        value: `@${profileHandle(this.contact.instagram)}`,
        href: this.contact.instagram,
        icon: Instagram,
        external: true,
      },
    ] satisfies Channel[]
  ).filter((channel) => channel.href);

  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    projectType: [''],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1500)]],
  });

  protected readonly submitted = signal(false);

  protected showError(control: 'name' | 'message'): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.touched || this.submitted());
  }

  /**
   * Monta a mensagem com os dados do formulário e abre o canal escolhido.
   * Nenhum dado é enviado a servidores: a mensagem segue pelo WhatsApp ou pelo app de e-mail do visitante.
   */
  protected send(channel: SendChannel): void {
    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.host.querySelector<HTMLElement>('.field .ng-invalid')?.focus();
      return;
    }

    const request = this.form.getRawValue();
    const protocol = createProtocol();
    const text = buildContactMessage(request, channel, protocol);

    if (channel === 'whatsapp') {
      window.open(whatsappUrl(text), '_blank', 'noopener');
    } else {
      window.location.href = mailtoUrl(`Novo projeto #${protocol}: ${request.name.trim()}`, text);
    }
  }
}
