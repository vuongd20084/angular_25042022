import { Component, OnInit } from '@angular/core';

//Call Redux Store
import {Store} from '@ngrx/store'

//Call Observable
import { Observable } from 'rxjs';
//Call map
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  cart: Observable<[]>;

  constructor(private store : Store<{cart: []}>) {
    this.cart = store.select('cart')
   }

  count:any

  ngOnInit(): void {
    this.totalCart()
    .subscribe((kq)=>{
      this.count = kq.length

      // console.log(this.count)
    })
  }

  totalCart(){
    return this.cart.pipe(map((data:any)=>data))
  }

}
