import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { NgwWowService } from 'ngx-wow';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  private readonly _NgwWowService = inject(NgwWowService)

  ngOnInit(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      this._NgwWowService.init()
    }
  }

  showArrow:boolean = false
  @HostListener('window:scroll') onScroll(){
    let scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      this.showArrow = true
    } else {
      this.showArrow = false
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
