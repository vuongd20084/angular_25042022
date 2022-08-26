import { Component, OnInit } from '@angular/core';

//Để lấy được giá trị trên params thì phải gọi ActivatedRoute, ParamMap
import { ActivatedRoute, ParamMap } from '@angular/router';
//Call service
import { AppService } from '../app.service';

//Call Redux Store
import {Store} from '@ngrx/store'
import {Cart} from '../models/cartModel'
import {addCart} from '../cartStore/cartAction'


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private router: ActivatedRoute, 
    private service: AppService,
    private store : Store<{cart: []}>
    ) { }

  slug:any
  id:any
  products:any

  //pagination
  p: number = 1;

  ngOnInit(): void {
    //gọi localStorage
    // console.log(localStorage.getItem('key'))

    this.router
    .paramMap
    .subscribe((params: ParamMap)=>{
      this.slug = params.get('id')

      this.service
      .get_single_list_categories(this.slug)
      .subscribe((kq:any)=>{
        this.id = kq['results'][0]._id

        this.service
        .get_list_productCategories(this.id)
        .subscribe((kq:any)=>{
          this.products = kq['results']

          // console.log(this.products)
        })
      })
    })
  }

  addToCart(id:any, name:any, slug:any, qty:any, price:any){
    if(price == null){
      alert("Giá chưa có, vui lòng liên hệ sđt: 035...")
    }else{
      //Thêm dữ liệu vào giỏ hàng
      const cart = new Cart(id, name, slug, qty, parseInt(price))
      this.store
        //dispatch đẩy dữ liệu đi
        .dispatch(
          //Thêm dữ liệ mới vào giỏ hàng
          addCart(cart)
          )

      alert('Đã thêm vào giỏ')
    }
    

    
  }

}
