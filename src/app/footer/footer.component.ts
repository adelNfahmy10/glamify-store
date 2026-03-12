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
    { id: 'home', name: 'footer.Links.list.home' },
    { id: 'about', name: 'footer.Links.list.about' },
    { id: 'why-us', name: 'footer.Links.list.whyUs' },
    { id: 'feature', name: 'footer.Links.list.features' },
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
