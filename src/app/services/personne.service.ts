import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private personnes: Personne[] = [];
  private url: string = 'http://localhost:5555/personnes';

  constructor(private http: HttpClient) {
    this.personnes = [
      { id: 1, nom: "wick", prenom: "john" },
      { id: 2, nom: "dalton", prenom: "jack" },
      { id: 3, nom: "maggio", prenom: "candice" },
    ];
  }
  getPersonnes() {
    return this.http.get<Array<Personne>>(this.url);
  }
  getPersonneById(id: number) {
    return this.personnes.find(elt => elt.id == id);
  }
  addPersonne(p: Personne) {
    this.personnes.push(p);
  }
  removePersonne(id: number) {
    // let p = this.personnes.find(elt => elt.id == id);
    this.personnes = this.personnes.filter(elt => elt.id != id);
  }
  updatePersonne(p: Personne) {
    let toBeUpdated = this.personnes.find(elt => elt.id == p.id);
    toBeUpdated = p;
  }
}
