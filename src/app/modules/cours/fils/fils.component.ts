import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit, OnChanges {
  @Input() ordre = '';
  @Input() ville = '';
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    for (const key in changes) {
      console.log(key)
      const change = changes[key];
      const value = change.currentValue;
      const previous = change.previousValue;
      console.log(value, previous)
    }
  }

  ngOnInit(): void {
  }

}
