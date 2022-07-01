import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  noms: string[] = [];
  nom = "";
  constructor() { }

  ngOnInit(): void {
  }
  seConnecter() {
    this.noms.push(this.nom);
  }
}
