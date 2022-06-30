import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {
  value1: number|null = null;
  value2: number|null = null;
  resultat = "";
  constructor() { }

  ngOnInit(): void {
  }
  calculer(op: string) {
    const expression = this.value1 + op + this.value2;
    this.resultat = `${this.value1} ${op} ${this.value2} = ${eval(expression)}`;
  }
}
