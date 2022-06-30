import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  nom = 'doe';
  constructor() { }

  ngOnInit(): void {
  }
  afficherNom(str: string) {
    this.nom = str;
  }
}
