import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<{ message: string, id: string }>();
  constructor() { }

  envoyerMessage(msg: string, nom: string) {
    this.subject.next({ message: msg, id: nom });
  }
  accederMessage() {
    return this.subject;
  }
}
