import { Component, OnInit } from '@angular/core';
//Call Redux Store
import {Store} from '@ngrx/store'
import {Cart} from '../models/cartModel'
import {editCart, deleteCart} from '../cartStore/cartAction'


//Call Observable
import { Observable } from 'rxjs';
//Call map
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Observable<[]>;

  constructor(private store : Store<{cart: []}>) {
    this.cart = store.select('cart')
   }

   get_cart(){
    return this.cart.pipe(map((data:any)=>data))
  }

  products:any
  total: any

  ngOnInit(): void {
    this.get_cart()
    .subscribe((kq)=>{
      this.products = kq

      //Tính tổng tiền
      this.total = 0

      this.products.forEach((e:any)=>{
        this.total += (e.price * e.qty)
      })

      // console.log(kq)
    })
  }

  updatePrice(id:any, name:any,slug:any, price:any, qty:any, ){
    if(price == null){
      alert("Giá chưa có, vui lòng liên hệ sđt: 035...")
    }else{
      if(qty !='' && qty>0){
        //Cập nhật dữ liệu vào giỏ hàng
          const cart = new Cart(id, name, slug, parseInt(qty), parseInt(price))
          this.store
            //dispatch đẩy dữ liệu đi
            .dispatch(
              //Cập nhật dữ liệu mới vào giỏ hàng
              editCart(cart)
              )

          alert('Đã cập nhật giỏ')
      }
      
    }
  }

  deleteCart(id:any){
    this.store
      //dispatch đẩy dữ liệu đi
      .dispatch(deleteCart(id)) //Xoá

    alert('Đã xoá')
  }

}
