import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  messages: string[] = [];
  constructor(private ms: MessageService) { }

  ngOnInit(): void {
    this.ms.accederMessage().subscribe(res => {
      this.messages.push(res);
    })
  }

}
