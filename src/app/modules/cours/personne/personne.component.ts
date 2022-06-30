import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personne: Personne = {};
  personnes: Array<Personne> = [];
  constructor(private ps: PersonneService) { }

  ngOnInit(): void {
    this.personnes = this.ps.getPersonnes();
  }
  ajouterPersonne(monForm: any) {
    this.ps.addPersonne({ ...this.personne });
    monForm.reset();
  }
}
