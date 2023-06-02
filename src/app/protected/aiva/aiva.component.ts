import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aiva',
  templateUrl: './aiva.component.html',
  styleUrls: ['./aiva.component.css']
})
export class AivaComponent {
  messages: string[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push(this.newMessage.trim());
      this.newMessage = '';
    }
  }


}
