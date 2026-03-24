import { isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataService, Product } from '../../services/data/data.service';
import { CartService } from '../../services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

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
  private readonly _DataService = inject(DataService)
  private readonly _CartService = inject(CartService)
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)

  isBrowser = false;
  allProducts: Product[] = [];
  scenCare: Product[] = [];
  makeUp: Product[] = [];
  perfume: Product[] = [];
  watches: Product[] = [];
  accessories: Product[] = [];

  // 1️⃣ للضغط على الكارت نفسه
  goToProductDetails() {
    this._Router.navigate(['/product-details']);
  }

  addToCart(product: any) {
    this._CartService.addToCart(product);
  }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this._PLATFORM_ID);
    this.allProducts = this._DataService.getAllProducts();
    this.scenCare = this._DataService.getProductSkincare();
    this.perfume = this._DataService.getProductPerfume();
    this.makeUp = this._DataService.getProductMakeup();
    this.accessories = this._DataService.getProductAccessories();
    this.watches = this._DataService.getProductWatches();
  }

  getStars(rate?: any) {
    const full = Math.floor(rate);
    const half = rate % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return {
      fullStars: Array(full),
      halfStar: half,
      emptyStars: Array(empty)
    };
  }

  slides = [
    { name: 'Dior Sauvage', price: 120, category: 'Perfume', image: 'assets/image/logos/glamify-logo.png' },
    { name: 'Chanel No.5', price: 150, category: 'Perfume', image: 'assets/image/logos/glamify-logo.png' },
    { name: 'Rolex Watch', price: 1200, category: 'Watches', image: 'assets/image/logos/glamify-logo.png' },
    { name: 'Makeup Kit', price: 80, category: 'Makeup', image: 'assets/image/logos/glamify-logo.png' },
    { name: 'Luxury Bracelet', price: 250, category: 'Accessories', image: 'assets/image/logos/glamify-logo.png' }
  ];

}
