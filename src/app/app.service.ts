import { Injectable } from '@angular/core';

//Sử dụng Api
import {HttpClient, HttpHeaders} from '@angular/common/http'

//Sử dụng
// import {Observable} from 'rxjs'
// import {of} from 'rxjs'
// import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  //Sử dụng HttpClient
  constructor(private http: HttpClient){}

  url = 'http://localhost:3000/api/'

  //Cấu hình header
  option = {headers: new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")}

  get_aside_data(){
    return this.http.get(this.url + 'categories/aside')
  }

  get_single_list_categories(slug:any){
    return this.http.get(this.url + 'categories/single_list/'+slug)
  }

  get_list_productCategories(id:any){
    return this.http.get(this.url + 'products/productCategories/'+id)
  }

  get_single_list_products(slug:any){
    return this.http.get(this.url + 'products/single_list/'+slug)
  }
  
  get_relative_products_lists(idCategory:any, idProduct:any){
    return this.http.get(this.url + 'products/relative/'+idCategory+'/'+idProduct)
  }

  post_contact(data:any){
    var body = new URLSearchParams()

    body.set('name', data.name)
    body.set('email', data.email)
    body.set('phone', data.phone)
    body.set('address', data.address)

    return this.http.post(this.url + 'contacts/add', body, this.option)
  }

  post_login(data:any){
    var body = new URLSearchParams()

    body.set('username', data.username)
    body.set('password', data.password)

    return this.http.post(this.url + 'users/login', body, this.option)
  }

  post_add_product(data:any, token:any){
    var body = new URLSearchParams()

    body.set('name', data.name)
    body.set('token', data.token)

    return this.http.post(this.url + 'products/add', body, this.option)
  }


}
