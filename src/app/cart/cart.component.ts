import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'
import { OrderService } from '../../services/order/order.service';
import { serverTimestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _OrderService = inject(OrderService)
  private readonly _CartService = inject(CartService)
  private readonly _Router = inject(Router)

  cart = this.cartService.cartSignal;
  ShippingValue:number = 40

  // quantity لكل منتج (بداية 1)
  quantities: Record<number, number> = {};
  summaryOrder:any[]  = []
  subtotal:number = 0
  totalWithShipping:number = 0


  constructor(private cartService: CartService) {
    // init quantities
    this.cart().forEach(item => {
      this.quantities[item.id] = 1;
    });
  }

  // زيادة الكمية
  increase(itemId: number) {
    this.quantities[itemId]++;
  }

  // تقليل الكمية
  decrease(itemId: number) {
    if (this.quantities[itemId] > 1) this.quantities[itemId]--;
  }

  // حساب total لكل منتج
  productTotal(itemId: number, price: number) {
    return this.quantities[itemId] * price;
  }

  // حساب الكلي
  get totalPrice() {
    return this.cart().reduce((sum, item) => {
      return sum + (this.quantities[item.id] * item.price);
    }, 0);
  }

  remove(itemId: number) {
    this.cartService.removeFromCart(itemId);
    delete this.quantities[itemId];
  }

  dataForm: FormGroup = this._FormBuilder.group({
    name: [
      '', [ Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\u0621-\u064A\s]+$/)]
    ],
    phone: [
      '', [ Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]
    ],
    address: [
      '', [ Validators.required, Validators.minLength(3), Validators.maxLength(200)]
    ]
  });

  checkOrder(): void {
    const cartItems = this.cart(); // جلب الكارت من الـ signal

    // بناء الـ order array مع total لكل منتج
    this.summaryOrder = cartItems.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: this.quantities[item.id], // quantity لكل منتج
      total: this.quantities[item.id] * item.price
    }));

    // total شامل
    this.subtotal = this.summaryOrder.reduce((sum, item) => sum + item.total, 0);

    // إضافة قيمة التوصيل
    this.totalWithShipping = this.subtotal + this.ShippingValue;
  }

  submitOrder(): void {
    // تحديث الـ summary قبل الإرسال
    this.checkOrder();

    // التأكد من صحة الفورم
    if (this.dataForm.invalid) {
      this.dataForm.markAllAsTouched(); // لتفعيل رسائل الخطأ
      return;
    }

    Swal.fire({
      title: 'Submitting Order...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });


    const orderData = {
      name: this.dataForm.value.name,
      phone: this.dataForm.value.phone,
      address: this.dataForm.value.address,
      products: this.summaryOrder,
      count: this.summaryOrder.length,
      subtotal: this.subtotal,
      total: this.totalWithShipping,
      date: serverTimestamp(),
      status: 'Pending',
    };

    this._OrderService.createOrders(orderData).subscribe({
      next: (res) => {
        Swal.close();
        Swal.fire({
          title: 'Order Successfully',
          text: 'Our team will contact you shortly',
          icon: "success",
          confirmButtonText: 'Done'
        }).then(()=>{
          this._Router.navigate(['/home']).then(() => {
            window.location.reload();
          });
        })

        this.submiteOrderInGoogleSheets();

        this.cartService.clearCart();
        this.quantities = {};
        this.summaryOrder = [];
        this.subtotal = 0;
        this.totalWithShipping = 0;
        this.dataForm.reset();
      },
      error: (err) => {
        Swal.close();

        Swal.fire({
          title: 'Error',
          text: 'Something went wrong, please try again.',
          icon: 'error'
        });
      }
    });
  }


  submiteOrderInGoogleSheets():void{
    // بناء بيانات الطلب
    const orderDataSheet = {
      orderId: Date.now(), // أو UUID
      name: this.dataForm.value.name,
      phone: this.dataForm.value.phone,
      address: this.dataForm.value.address,
      products: JSON.stringify(this.summaryOrder), // 👈 مهم
      count: this.summaryOrder.length,
      subtotal: this.subtotal,
      total: this.totalWithShipping,
      date: new Date().toISOString(), // 👈 مهم بدل object
      status: 'Pending',
    };

    const formData = new FormData()
    formData.append('OrderId', String(orderDataSheet.orderId)),
    formData.append('Date', orderDataSheet.date),
    formData.append('Name', orderDataSheet.name),
    formData.append('Phone', orderDataSheet.phone),
    formData.append('Address', orderDataSheet.address),
    formData.append('Products', orderDataSheet.products),
    formData.append('Count', String(orderDataSheet.count)),
    formData.append('SubTotal', String(orderDataSheet.subtotal)),
    formData.append('Total', String(orderDataSheet.total)),
    formData.append('Status',  orderDataSheet.status),

    this._CartService.orders(formData).subscribe({
      next:(res)=>{
        console.log('Done In Google Sheets');
      },
      error:(err)=>{
        console.log('Wrong Save In Google Sheets');
      }
    })
  }
}
