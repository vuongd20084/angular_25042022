import { Injectable } from '@angular/core';

//Sử dụng Api
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  //Sử dụng HttpClient
  constructor(private http: HttpClient){}

  url = 'http://localhost:3000/api/'

  get_aside_data(){
    return this.http.get(this.url + 'categories/aside')
  }

  get_single_list_categories(slug:any){
    return this.http.get(this.url + 'categories/single_list/'+slug)
  }

  get_list_productCategories(id:any){
    return this.http.get(this.url + 'products/productCategories/'+id)
  }
}
