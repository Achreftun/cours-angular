import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stagiaire } from 'src/app/classes/stagiaire';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'cours-angular';

  maDate= Date.now();
  lienStagiaire = '';
  nom = "wick";
  prenom = 'john';
  heure = 4;
  couleur = "white";
  couleurBg = "red";
  stagiaire: Stagiaire = new Stagiaire(100, "Wick", "John");
  tab: number[] = [2, 3, 8, 5];
  moyennes: number[] = [18, 5, 11, 15];
  stagiaires: Array<Stagiaire> = [
    new Stagiaire(100, 'Wick', 'John'),
    new Stagiaire(101, 'Abruzzi', 'John'),
    new Stagiaire(102, 'Marley', 'Bob'),
    new Stagiaire(103, 'Segal', 'Steven')
  ];
  constructor(private router: Router) {
    this.lienStagiaire = `/cours/stagiaire/${this.nom}/${this.prenom}`;
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {

  }
  direBonjour() {
    return "Bonjour";
  }
  afficherBonjour() {
    console.log("Bonjour")
  }
  getColor() {
    return this.couleur;
  }
  getBgColor() {
    return this.couleurBg;
  }
  visiter() {
    // this.router.navigateByUrl('/stagiaire/messi/lionel');
    this.router.navigate(['/cours/stagiaire', 'messi', 'lionel']);
  }


}
