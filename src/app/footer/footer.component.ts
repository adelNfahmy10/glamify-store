import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  activeLink: string = 'home';
  sections = [
    { id: 'home', name: 'navbar.home' },
    { id: 'about', name: 'navbar.about' },
    { id: 'why-us', name: 'navbar.whyUs' },
    { id: 'feature', name: 'navbar.features' },
    { id: 'how-it-work', name: 'navbar.how-it-work' },
    { id: 'event-types', name: 'navbar.event-types' },
    { id: 'pricing', name: 'navbar.pricing' },
    { id: 'faq', name: 'navbar.faq' },
    { id: 'contact-us', name: 'navbar.contact-us' },
      // { id: 'our-work', name: 'footer.Links.list.ourWork' },
      // { id: 'partners', name: 'footer.Links.list.partners' },
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
