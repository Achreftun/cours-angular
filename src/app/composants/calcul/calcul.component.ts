import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  op = '';
  value1 = 0;
  value2 = 0;
  resultat = 0;
  operateur = '';
  erreur: string | null = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.op = this.route.snapshot.params['op'];
    this.value1 = +this.route.snapshot.queryParams['value1'];
    this.value2 = +this.route.snapshot.queryParams['value2'];
    if (this.op == "plus") {
      this.resultat = this.value1 + this.value2;
      this.operateur = '+';
    } else if (this.op == "moins") {
      this.resultat = this.value1 - this.value2;
      this.operateur = '-';
    } else if (this.op == "fois") {
      this.resultat = this.value1 * this.value2;
      this.operateur = '*';
    } else if (this.op == "div") {
      this.resultat = this.value1 / this.value2;
      this.operateur = '/';
    } else {
      this.erreur = `operateur ${this.op} inconnu`;
    }
  }

}
