import { Component, OnInit } from '@angular/core';


//Call service
import { AppService } from '../app.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit(): void {
  }

  token = localStorage.getItem('token')

  getProduct(data:any){
    this.service
    .post_add_product(data.value, this.token)
    .subscribe((kq:any)=>{
      console.log(kq)
    })
    
    
  }

}
