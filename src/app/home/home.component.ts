import { isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  private readonly _Router = inject(Router)
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)

  isBrowser = false;

  // 1️⃣ للضغط على الكارت نفسه
  goToProductDetails() {
    this._Router.navigate(['/product-details']);
  }

  // 2️⃣ للضغط على Add to Cart
  addToCart(event: Event, product: any) {
    event.stopPropagation(); // مهم جدًا! عشان click الكارت ما يتنفذش
    console.log('Adding to cart:', product);
    // هنا تحط أي منطق لإضافة المنتج للكارت
    // مثلا service أو store
  }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this._PLATFORM_ID);
  }

  slides = [
    { name: 'Dior Sauvage', price: 120, category: 'Perfume', image: 'assets/image/logos/glamify-logo.png' },
    { name: 'Chanel No.5', price: 150, category: 'Perfume', image: 'assets/image/logos/glamify-logo.png' },
    { name: 'Rolex Watch', price: 1200, category: 'Watches', image: 'assets/image/logos/glamify-logo.png' },
    { name: 'Makeup Kit', price: 80, category: 'Makeup', image: 'assets/image/logos/glamify-logo.png' },
    { name: 'Luxury Bracelet', price: 250, category: 'Accessories', image: 'assets/image/logos/glamify-logo.png' }
  ];

}
