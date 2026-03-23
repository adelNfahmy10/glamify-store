import { isPlatformBrowser, NgClass, NgStyle } from '@angular/common';
import { Component, HostListener, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, TranslatePipe, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  private readonly _TranslateService = inject(TranslateService)
  private readonly _CartService = inject(CartService)

  cartCount = this._CartService.cartSignal;
  navbarWidth:string = '100%'
  navbarTop:string = '0'
  background:string = 'transparent'
  lastScrollTop = 0;
  isNavbarVisible = true;
  lang: string =  'ar';

  ngOnInit(): void {
    this._TranslateService.use(this.lang);
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      this.updateHtmlAttributes();
    }
  }

  @HostListener('window:scroll') onScroll(){
    const scrollPosition = window.scrollY;

    if (scrollPosition > this.lastScrollTop) {
      if(this.lastScrollTop > 200){
        this.navbarTop = '-100px';
      }
    } else {
      if(this.lastScrollTop > 200){
        this.navbarTop = '0';
      } else {
        this.navbarTop = '0';
      }
    }

    this.lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
  }

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
  ];
  activeLink: string = 'home';

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.setActiveLink(sectionId);
    }
  }

  setActiveLink(sectionId: string) {
    this.activeLink = sectionId;
  }

  ngAfterViewInit() {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeLink = entry.target.id;
            }
          });
        },
        { threshold: 0.5 }
      );

      this.sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });
    }
  }

  // Translation Code
  switchLang() {
    this.lang = this.lang === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', this.lang);
    this._TranslateService.use(this.lang);
    this.updateHtmlAttributes();
  }

  updateHtmlAttributes() {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('dir', this.lang === 'ar' ? 'rtl' : 'ltr');
    htmlTag.setAttribute('lang', this.lang);
  }

}
