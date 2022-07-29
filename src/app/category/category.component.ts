import { Component, OnInit } from '@angular/core';

//Để lấy được giá trị trên params thì phải gọi ActivatedRoute, ParamMap
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  slug:any

  ngOnInit(): void {
    this.router
    .paramMap
    .subscribe((params: ParamMap)=>{
      this.slug = params.get('id')
    })
  }

}
