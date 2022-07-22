import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {CategoryComponent} from './category/category.component'
import {ProductComponent} from './product/product.component'
import {UserComponent} from './user/user.component'

//Các trang không tìm thấy
import {Page404Component} from './page404/page404.component'

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'danhmuc',
    component: CategoryComponent
  },
  {
    path : 'sanpham',
    component: ProductComponent
  },
  {
    path : 'thanhvien',
    component: UserComponent
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
