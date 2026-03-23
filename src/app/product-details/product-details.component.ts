import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductDetailsComponent {
  product: any;
  quantity = 1;

  ngOnInit() {
    this.product = {
      title: 'Matte Lipstick',
      description: 'High quality long-lasting lipstick.',
      images: [
        'assets/image/home-image/banner-1.png',
        'assets/image/home-image/banner-1.png',
        'assets/image/home-image/banner-1.png',

      ]
    };
  }

  slides = [
    { name: 'Dior Sauvage', price: 120, category: 'Perfume', image: 'assets/image/logos/glamify-logo.png' },
    { name: 'Chanel No.5', price: 150, category: 'Perfume', image: 'assets/image/logos/glamify-logo.png' },
    { name: 'Rolex Watch', price: 1200, category: 'Watches', image: 'assets/image/logos/glamify-logo.png' },
    { name: 'Makeup Kit', price: 80, category: 'Makeup', image: 'assets/image/logos/glamify-logo.png' },
    { name: 'Luxury Bracelet', price: 250, category: 'Accessories', image: 'assets/image/logos/glamify-logo.png' }
  ];

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) this.quantity--;
  }
}
