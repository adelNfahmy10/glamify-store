import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryComponent } from './category/category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ViewProductsComponent } from './admin/view-products/view-products.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { BrandsComponent } from './admin/brands/brands.component';
import { CategoriesComponent } from './admin/categories/categories.component';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent, title:'Home'},
  {path:'cart', component:CartComponent, title:'Cart'},
  {path:'product-details/:id', component:ProductDetailsComponent, title:'Product Details'},
  {path:'category/:name', component:CategoryComponent, title:'Category'},
  {path:'add-product', component:AddProductComponent, title:'Add Product'},
  {path:'update-product/:id', component:UpdateProductComponent, title:'Update Product'},
  {path:'view-product', component:ViewProductsComponent, title:'View Products'},
  {path:'brands', component:BrandsComponent, title:'Brands'},
  {path:'categories', component:CategoriesComponent, title:'Categories'},
];
