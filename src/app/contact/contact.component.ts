import { Component, OnInit } from '@angular/core';
//form
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  info = {
    name: '',//Nguyễn Văn A
    email: '',//nguyenvana@gmail.com
    phone: '',//0123456789
    address: ''//Ninh Kiều, Cần Thơ
  }

  ngOnInit(): void {
    
  }

  getData(data:any){
    console.log(data.value)
  }

}
