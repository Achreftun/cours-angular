import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  msg = '';
  constructor(private ms: MessageService) { }

  ngOnInit(): void {
  }
  envoyerMessage() {
    this.ms.envoyerMessage(this.msg);
    this.msg = '';

  }
}
