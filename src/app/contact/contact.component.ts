import { Component, OnInit } from '@angular/core';

//form
// import { NgForm } from '@angular/forms';

//Call service
import { AppService } from '../app.service';

////Gọi thư viện sử dụng form trong file ts
import {FormControl, FormGroup, Validator, Validators } from '@angular/forms' 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service: AppService) { }

  info = {
    name: '',//Nguyễn Văn A
    email: '',//nguyenvana@gmail.com
    phone: '',//0123456789
    address: ''//Ninh Kiều, Cần Thơ
  }

  //Sử dụng formGroup để lấy và kiểm tra dữ liệu
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(3)]),
    email: new FormControl(''),
    phone: new FormControl('',[Validators.pattern('[0-9]+')]),
    address: new FormControl('')
  })

  ngOnInit(): void {
    
  }

  getData(data:any){

    this.service
    .post_contact(data.value)
    .subscribe((kq)=>{
      console.log(kq)
    })
  }

  //bắt buộc phải có khi dùng FormControl
  get name(){return this.contactForm.controls.name}
  get email(){return this.contactForm.controls.email}
  get phone(){return this.contactForm.controls.phone}
  get address(){return this.contactForm.controls.address}

  getData_2(){
    this.service
    .post_contact(this.contactForm.value)
    .subscribe((kq)=>{
      console.log(kq)
    })
    // console.log(this.contactForm.value)
  }

}
