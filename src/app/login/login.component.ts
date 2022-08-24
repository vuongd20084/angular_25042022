import { Component, OnInit } from '@angular/core';

import {Router } from '@angular/router';
//Call service
import { AppService } from '../app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AppService, private router:Router) { }

  ngOnInit(): void {
  }

  getLogin(data:any){
    this.service
    .post_login(data.value)
    .subscribe((response:any)=>{
      
      if(response['kq']==1){
        //login thành công
        localStorage.setItem('token', response['results'].token)
        // console.log("Đăng nhập thành công: " + response['results'].token)
        alert("Đăng nhập thành công")
        //chuyển về trang adminProduct
        this.router.navigate(['/admin-product'])
      }else{
        alert("Đăng nhập thất bại")
        // console.log("Đăng nhập thất bại")
      }
    })

    //localStorage: tạo, sử dụng và xoá
    //1. localStorage.setItem('key', 'value');
    //2. localStorage.getItem('key');
    //3. localStorage.removeItem('key');
    //3. localStorage.clear();
  }

}
