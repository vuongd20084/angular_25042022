import { Component, OnInit } from '@angular/core';

//Để lấy được giá trị trên params thì phải gọi ActivatedRoute, ParamMap
import { ActivatedRoute, ParamMap } from '@angular/router';
//Call service
import { AppService } from '../app.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: ActivatedRoute, private service: AppService) { }

  slug:any
  id:any

  name:any
  content:any
  idCategory:any
  products:any

  ngOnInit(): void {
    this.router
    .paramMap
    .subscribe((params: ParamMap)=>{
      this.slug = params.get('id')

      this.service
      .get_single_list_products(this.slug)
      .subscribe((kq:any)=>{
        this.id = kq['results'][0]._id
        this.name = kq['results'][0].name
        this.content = kq['results'][0].content
        this.idCategory = kq['results'][0].parents

        this.service
        .get_relative_products_lists(this.idCategory,this.id)
        .subscribe((kq:any)=>{
          this.products = kq['results']
        })
          // console.log(this.name)
        
      })

      
    })
  }

}
