import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { DataService } from '../../services/data/data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductDetailsComponent {
  private readonly _DataService = inject(DataService);
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _CartService = inject(CartService);
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);

  isBrowser = false;
  product: any;
  productId!: number;
  productCategory!: string;
  productBrand!: string;
  relateProductsCategory:any [] = []
  relateProductsBrand:any [] = []
  quantity: number = 1;
  fullStars: number[] = [];
  halfStar: boolean = false;
  emptyStars: number[] = [];


  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this._PLATFORM_ID);
    this.getProductById();
  }

  getProductById(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.productId = Number(param.get('id')); // تحويل إلى رقم
        this.product = this._DataService.getProductById(this.productId);
        this.productCategory = this.product.category
        this.productBrand = this.product.brand
        this.relateProductsCategory = this._DataService.getProductsByCategory(this.productCategory)
        this.relateProductsBrand = this._DataService.getProductsByBrand(this.productBrand).reverse()
        this.setRating()
      }
    });
  }

  setRating() {
    const full = Math.floor(this.product?.rate);
    const half = this.product?.rate % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;

    this.fullStars = Array(full);
    this.halfStar = half === 1;
    this.emptyStars = Array(empty);
  }

  addToCart() {
    this._CartService.addToCart(this.product);
  }

  addRelatedToCart(product:any) {
    this._CartService.addToCart(product);
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

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) this.quantity--;
  }
}
