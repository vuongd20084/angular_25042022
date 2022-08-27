import { Component, OnInit } from '@angular/core';
//Call Redux Store
import {Store} from '@ngrx/store'

//Call Observable
import { Observable } from 'rxjs';
//Call map
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

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

  arr_district:any
  arr_wards:any


  getCustomerInfo(info:any){}

  getDictrict(key:any){
    //Lấy danh sách quận huyện theo id của tỉnh/thành phố
    this.arr_district = [
      {id: 1, name: 'Bình Chánh', wards:[
        {id: 1, name: 'An Phú Tây', prefix:	"Xã"},
        {id: 2, name: 'Bình Chánh', prefix:	"Xã"},
      ]},
      {id: 2, name: 'Bình Tân', wards:[
        {id: 17, name: 'An Lạc', prefix:	"Phường"},
        {id: 18, name: 'An Lạc A', prefix:	"Phường"},
      ]}
    ]
    alert(key)
  }
  
  getWards(key:any){
    //Lấy danh sách quận huyện theo id của tỉnh/thành phố
    this.arr_wards = this.arr_district[key-1].wards
    alert(key)
  }

  end_payment(){
    // 1. Thông tin khách hàng : tạo bảng customer
      // nếu trùng tên, sđt, địa chỉ thì lấy customerId đã có
      // ko thì tạo mới => lấy customerId
    // 2. Phương thức thanh toán: lấy paymentId từ bảng payment
    // 3. Phương thức giao hàng : lấy deliveryId từ bảng delivery
    

    //4. Thêm bảng: Order
      //Order: customerId, paymentId, deliveryId, date_created
      // => lấy ra orderId

    // 5. Chi tiết đơn hàng
      // Thêm bảng: OrderDetail
      // OrderDetail: orderId, tên sản phẩm, số lượng, đơn giá, thành tiền
    alert(1)
  }
}
