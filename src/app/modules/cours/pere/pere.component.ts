import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  tab: string[] = ['premier', 'deuxieme', 'troisieme'];
  nord = 'Lille';
  sud = 'Marseille';
  capitale = 'Paris';
  constructor() { }

  ngOnInit(): void {
  }

}
