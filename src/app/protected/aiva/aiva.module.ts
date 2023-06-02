import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AivaComponent } from './aiva.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { ChatComponent } from './components/chat/chat.component';
import { ListChatComponent } from './components/list-chat/list-chat.component';



@NgModule({
  declarations: [
    AivaComponent,
    ChatComponent,
    ListChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ]
})
export class AivaModule { }
