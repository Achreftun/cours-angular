import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  couleurs = ['red', 'blue', 'green'];
  textes = ['hi', 'salut', 'ciao'];
  couleur = '';
  texte = '';
  constructor() { }

  ngOnInit(): void {
  }
  ajouter(form: any) {
    this.couleurs.push(this.couleur);
    this.textes.push(this.texte);
    form.reset();
  }
}
