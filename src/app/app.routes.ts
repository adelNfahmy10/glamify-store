import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
  {path:'', component:HomeComponent, title:'Home'},
  {path:'home', component:HomeComponent, title:'Home'},
  {path:'cart', component:CartComponent, title:'Cart'},
  {path:'product-details/:id', component:ProductDetailsComponent, title:'Product Details'},
  {path:'category/:name', component:CategoryComponent, title:'Category'},
];
