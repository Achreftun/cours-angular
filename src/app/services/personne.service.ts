import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private personnes: Personne[] = [];
  constructor() {
    this.personnes = [
      { id: 1, nom: "wick", prenom: "john" },
      { id: 2, nom: "dalton", prenom: "jack" },
      { id: 3, nom: "maggio", prenom: "candice" },
    ]
  }
  getPersonnes() {
    return this.personnes;
  }
  addPersonne(p: Personne) {
    this.personnes.push(p);
  }
  removePersonne(id: number) {
    // let p = this.personnes.find(elt => elt.id == id);
    this.personnes = this.personnes.filter(elt => elt.id != id);
  }
}
