import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly _HttpClient = inject(HttpClient)

  private storageKey = 'cart';
  private readonly _ToastrService = inject(ToastrService);

  // 🟢 Signal للكارت
  public cartSignal:WritableSignal<any[]> = signal(this.getCart());

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  // 🟢 Get Cart
  getCart(): any[] {
    if (!this.isBrowser()) return [];
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  // 🟢 Save Cart
  private saveCart(cart: any[]): void {
    if (!this.isBrowser()) return;
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
    this.cartSignal.set(cart);
  }

  // 🟢 Add To Cart
  addToCart(product: any): void {
    let cart = this.getCart();
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      this._ToastrService.warning("⚠️ المنتج موجود بالفعل في السلة");
      return;
    }

    cart.push(product);
    this.saveCart(cart);
    this._ToastrService.success("✅ تم إضافة المنتج إلى السلة");
  }

  // 🟢 Remove Item
  removeFromCart(productId: number): void {
    let cart = this.getCart().filter(item => item.id !== productId);
    this.saveCart(cart);
  }

  // 🟢 Clear Cart
  clearCart(): void {
    localStorage.removeItem(this.storageKey);
    this.cartSignal.set([]); // 🔥 تحديث الـ signal
  }

  private scriptURL = "https://script.google.com/macros/s/AKfycbx1QArhYyGbbnTVj5RcnSkhoEKhI_OgXebvn5qtsfxi_woBb7x-0LspzlgbxiF4tXsW/exec"; // ضع رابط Google App Script هنا


  orders(formData: FormData): Observable<any> {
    return this._HttpClient.post(this.scriptURL, formData, { responseType: 'text' });
  }

}
