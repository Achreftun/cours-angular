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
  direBonjour() {
    return "Bonjour";
  }
}
