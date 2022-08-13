import { Component, OnInit } from '@angular/core';

//Để lấy được giá trị trên params thì phải gọi ActivatedRoute, ParamMap
import { ActivatedRoute, ParamMap } from '@angular/router';
//Call service
import { AppService } from '../app.service';




@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router: ActivatedRoute, private service: AppService) { }

  slug:any
  id:any
  products:any

  ngOnInit(): void {
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

          console.log(this.products)
        })
      })
    })
  }

}
