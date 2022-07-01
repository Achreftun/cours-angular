import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  noms = ['wick', 'travolta', 'abruzzi'];
  moyenne = 0;
  somme = 0;
  nbrNotes = 0;
  constructor() { }

  ngOnInit(): void {
  }
  calculerMoyenne(valeur: number) {
    this.somme += valeur;
    this.nbrNotes++;
    this.moyenne = this.somme / this.nbrNotes;
  }
}
