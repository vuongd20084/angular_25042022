import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {CategoryComponent} from './category/category.component'
import {ProductComponent} from './product/product.component'
import {UserComponent} from './user/user.component'

import {InfoComponent} from './info/info.component'
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { CartComponent } from './cart/cart.component';
import {PaymentComponent} from './payment/payment.component'
//Các trang không tìm thấy
import {Page404Component} from './page404/page404.component'

//Call Guard app đẻ bảo vệ link
import {AppGuard} from './app.guard'



const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'danhmuc/:id',
    component: CategoryComponent
  },
  {
    path : 'sanpham/:id',
    component: ProductComponent
  },
  {
    path : 'thanhvien',
    component: UserComponent
  },
  {
    path : 'lienhe',
    component: ContactComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'admin-product',
    component: AdminProductComponent
  },
  {
    path : 'info',
    component: InfoComponent,
    canActivate: [AppGuard]
  },
  {
    path : 'cart',
    component: CartComponent
  },
  {
    path : 'payment',
    component: PaymentComponent
  },
  {
    path : '**',
    component: Page404Component
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
