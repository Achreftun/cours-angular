import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input('lastname') nom = '';
  msg = '';
  messages: Array<{ message: string, id: string }> = [];
  constructor(private ms: MessageService) { }

  ngOnInit(): void {
    this.ms.accederMessage().subscribe(res => {
      this.messages.push(res);
    });
  }
  envoyerMessage() {
    this.ms.envoyerMessage(this.msg, this.nom);
    this.msg = '';
  }
}
