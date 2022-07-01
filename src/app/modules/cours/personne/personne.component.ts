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
    this.initPersonnes();
  }
  ajouterPersonne(monForm: any) {
    // this.ps.addPersonne({ ...this.personne });
    this.ps.addPersonne(this.personne).subscribe(res => {
      // this.personnes.push(res);
      this.initPersonnes();
    })
    monForm.reset();
  }
  supprimerPersonne(id: number = 0) {
    this.ps.removePersonne(id);
    this.initPersonnes();
  }
  initPersonnes() {
    this.ps.getPersonnes().subscribe(res => {
      this.personnes = res;
    });
  }
}
