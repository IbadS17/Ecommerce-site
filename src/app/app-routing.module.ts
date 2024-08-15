import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartstatusComponent } from './conponent/cartstatus/cartstatus.component';
import { CategoryComponent } from './conponent/category/category.component';
import { CheckoutformComponent } from './conponent/checkoutform/checkoutform.component';
import { HomeComponent } from './conponent/home/home.component';
import { LoginComponent } from './conponent/login/login.component';
import { OrdersaverComponent } from './conponent/ordersaver/ordersaver.component';
import { ProductdetailComponent } from './conponent/productdetail/productdetail.component';
import { ProductsComponent } from './conponent/products/products.component';
import { WhishlistComponent } from './conponent/whishlist/whishlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:name', component: CategoryComponent, pathMatch: 'full' },
  { path: 'product/:name', component: ProductsComponent },
  { path: 'productdetails/:id', component: ProductdetailComponent },
  { path: 'whishlist', component: WhishlistComponent },
  { path: 'cart-item', component: CartstatusComponent },
  { path: 'checkout-form', component: CheckoutformComponent },
  { path: 'login', component: LoginComponent },
  { path: 'order-checkout', component: OrdersaverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
