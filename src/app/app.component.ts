import { Component } from '@angular/core';
import { Stagiaire } from './classes/stagiaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cours-angular';
  stagiaire: Stagiaire = new Stagiaire(100, "Wick");
  tab: number[] = [2, 3, 8, 5];
  moyennes = [18, 5, 11, 15];
  stagiaires: Array<Stagiaire> = [
    new Stagiaire(100, 'Wick', 'John'),
    new Stagiaire(101, 'Abruzzi', 'John'),
    new Stagiaire(102, 'Marley', 'Bob'),
    new Stagiaire(103, 'Segal', 'Steven')
  ];
  direBonjour() {
    return "Bonjour";
  }
  afficherBonjour() {
    console.log("Bonjour")
  }
}
