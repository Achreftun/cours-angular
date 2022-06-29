import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
  nom = '';
  prenom = '';
  // injection de dépendance : on a injecté ActivatedRoute dans le constructeur de ce composant
  // c'est Angular qui va l'instancier pour nous
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.nom = res.get('nom') ?? "";
      this.prenom = res.get('prenom') ?? "";
    })
    // this.nom = this.route.snapshot.params['nom'];
    // this.prenom = this.route.snapshot.params['prenom'];
  }

}
