import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArrowUp, Github, Instagram, Linkedin, LucideAngularModule, Mail } from 'lucide-angular';
import { NAV_ITEMS } from '../../core/content/navigation';
import { SITE_CONFIG, mailtoUrl } from '../../core/config/site.config';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly site = SITE_CONFIG;
  protected readonly year = new Date().getFullYear();
  protected readonly arrowUp = ArrowUp;
  protected readonly navItems = [...NAV_ITEMS.filter((item) => item.id !== 'inicio'), { id: 'faq', label: 'Dúvidas' }];

  protected readonly socials = [
    { label: 'LinkedIn', href: SITE_CONFIG.contact.linkedin, icon: Linkedin },
    { label: 'Instagram', href: SITE_CONFIG.contact.instagram, icon: Instagram },
    { label: 'GitHub', href: SITE_CONFIG.contact.github, icon: Github },
    { label: 'E-mail', href: SITE_CONFIG.contact.email ? mailtoUrl('Contato pelo site') : '', icon: Mail },
  ].filter((social) => social.href);
}
