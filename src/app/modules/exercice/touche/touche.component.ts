import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-touche',
  templateUrl: './touche.component.html',
  styleUrls: ['./touche.component.css']
})
export class ToucheComponent implements OnInit {
  @Input() value = '';
  @Output() message = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  write() {
    this.message.emit(this.value);
  }
}
