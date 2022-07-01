import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() nom = '';
  note = 0;
  buttonStatus = false;
  @Output() message = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  envoyer() {
    this.message.emit(this.note);
    this.buttonStatus = true;
  }
}
