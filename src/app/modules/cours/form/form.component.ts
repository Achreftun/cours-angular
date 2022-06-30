import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  personneForm = new FormGroup({
    id: new FormControl(),
    nom: new FormControl(),
    prenom: new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
  }
  afficherTout() {
    console.log(this.personneForm.value);
  }
}
