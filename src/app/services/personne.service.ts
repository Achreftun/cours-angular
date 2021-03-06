import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  // private personnes: Personne[] = [];
  private url: string;

  constructor(private http: HttpClient) {
    // this.personnes = [
    //   { id: 1, nom: "wick", prenom: "john" },
    //   { id: 2, nom: "dalton", prenom: "jack" },
    //   { id: 3, nom: "maggio", prenom: "candice" },
    // ];
    const endPoint = environment.endPoint;
    this.url = `${endPoint}/personnes`;
  }
  getPersonnes() {
    return this.http.get<Array<Personne>>(this.url);
  }
  getPersonneById(id: number) {
    return this.http.get<Personne>(`${this.url}/${id}`);
  }
  addPersonne(p: Personne) {
    // HTTP : POST
    // this.personnes.push(p);
    return this.http.post<Personne>(this.url, p);
  }
  removePersonne(id: number) {
    // let p = this.personnes.find(elt => elt.id == id);
    // this.personnes = this.personnes.filter(elt => elt.id != id);
    return this.http.delete(`${this.url}/${id}`);
  }
  updatePersonne(p: Personne) {
    // let toBeUpdated = this.personnes.find(elt => elt.id == p.id);
    // toBeUpdated = p;
    return this.http.put<Personne>(`${this.url}/${p.id}`, p);
  }
}
