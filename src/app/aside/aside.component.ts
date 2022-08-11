import { Component, OnInit } from '@angular/core';

//Call Service
import { AppService } from '../app.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private service: AppService) { }

  /**
   * 
   * [
   *  {
   *      [
   *        {},
   *        {}
   *      ]
   *  }
   * ]
   * 
   */

  aside_data:any

  ngOnInit(): void {

    this.service.get_aside_data()
    .subscribe((kq:any)=>{
      this.aside_data = kq['result']

      // console.log(this.aside_data)
    })
  }

}
