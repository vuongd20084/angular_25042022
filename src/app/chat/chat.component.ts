import { Component, OnInit } from '@angular/core';

//Socket io
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    this.getMessage()
    .subscribe((data)=>{
      console.log(data)
    })
  }

  sendMessage() {
    this.socket.emit('angular', "Xin chào Nodejs");
  }
  getMessage() {
    return this.socket.fromEvent('nodejs').pipe(map((data) => data));
  }

}
