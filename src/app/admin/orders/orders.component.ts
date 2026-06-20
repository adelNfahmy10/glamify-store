import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [DecimalPipe, RouterLink, DatePipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit{
  private readonly _OrderService = inject(OrderService)

  orders:any[] = []

  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders():void{
    this._OrderService.getOrders().subscribe({
      next:(res)=>{
        this.orders = res
        console.log(this.orders);

      }
    })
  }

}
