import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {CategoryComponent} from './category/category.component'
import {ProductComponent} from './product/product.component'
import {UserComponent} from './user/user.component'

import {InfoComponent} from './info/info.component'

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
    path : 'sanpham',
    component: ProductComponent
  },
  {
    path : 'thanhvien',
    component: UserComponent
  },
  {
    path : 'info',
    component: InfoComponent,
    canActivate: [AppGuard]
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
