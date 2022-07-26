import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { Page404Component } from './page404/page404.component';
import { InfoComponent } from './info/info.component';

//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//Sử dụng Api
import {HttpClientModule} from '@angular/common/http'

//Socket io
import { ChatComponent } from './chat/chat.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

//Pagination
import {NgxPaginationModule} from 'ngx-pagination';

import { ContactComponent } from './contact/contact.component';
////form xử lý bên file html 
import { FormsModule} from '@angular/forms';

////Gọi thư viện sử dụng form trong file ts
import {ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminProductComponent } from './admin-product/admin-product.component';

//Gọi Redux Store
import {StoreModule} from '@ngrx/store'
import {cartReducer} from './cartStore/cartReducer';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component'
const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    MainComponent,
    AsideComponent,
    CategoryComponent,
    ProductComponent,
    UserComponent,
    Page404Component,
    InfoComponent,
    ChatComponent,
    ContactComponent,
    LoginComponent,
    AdminProductComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //import HttpClientModule after BrowserModule
    HttpClientModule,
    SocketIoModule.forRoot(config),
    //bootstrap
    NgbModule,
    //Pagination
    NgxPaginationModule,
    //form xử lý bên file html
    FormsModule,
    ////Gọi thư viện sử dụng form trong file ts
    ReactiveFormsModule,
    //Gọi Redux Store
    StoreModule.forRoot({ cart: cartReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
