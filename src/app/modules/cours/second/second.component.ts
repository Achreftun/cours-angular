import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  nom = 'Wick';
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
