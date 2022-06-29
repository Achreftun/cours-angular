import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Stagiaire } from './classes/stagiaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lienStagiaire = '';
  nom = "wick";
  prenom = 'john';
  heure = 4;
  title = 'cours-angular';
  couleur = "white";
  couleurBg = "red";
  stagiaire: Stagiaire = new Stagiaire(100, "Wick");
  tab: number[] = [2, 3, 8, 5];
  moyennes: number[] = [18, 5, 11, 15];
  stagiaires: Array<Stagiaire> = [
    new Stagiaire(100, 'Wick', 'John'),
    new Stagiaire(101, 'Abruzzi', 'John'),
    new Stagiaire(102, 'Marley', 'Bob'),
    new Stagiaire(103, 'Segal', 'Steven')
  ];
  constructor(private router: Router) {
    this.lienStagiaire = `/stagiaire/${this.nom}/${this.prenom}`;
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
    this.router.navigate(['/stagiaire', 'messi', 'lionel']);
  }
}