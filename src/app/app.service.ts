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
    return this.http.get(this.url + 'categories/get_aside_data')
  }
}
