import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  nom = new FormControl('doe');
  constructor() { }

  ngOnInit(): void {
  }
  afficherNom() {
    console.log(this.nom.value);
  }
}
