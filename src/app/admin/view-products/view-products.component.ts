import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductService } from '../../../services/products/product.service';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.scss'
})
export class ViewProductsComponent {
 products: any[] = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  // ================= GET ALL =================
  getProducts(): void {
    this._productService.getAllProducts().subscribe(res => {
      this.products = res;
    });
  }

  // ================= DELETE =================
  deleteProduct(id: string): void {

    Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {

        this._productService.deleteProduct(id).subscribe({
          next: () => {

            this.products = this.products.filter(p => p.id !== id);

            Swal.fire({
              title: "Deleted!",
              icon: "success",
              timer: 1500,
              showConfirmButton: false
            });

          }
        });

      }

    });

  }

  // ================= UPDATE (placeholder) =================
  updateProduct(product: any): void {
    console.log('Edit product:', product);
  }
}
