import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  personneForm = new FormGroup({
    id: new FormControl(0),
    nom: new FormControl('doe'),
    prenom: new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
    // const personne: Personne = { id: 105, nom: "wick", "prenom": "john" };
     this.personneForm.patchValue({ id: 105, nom: "wick" });
    // this.personneForm.setValue({ id: 105, nom: "wick", "prenom": "john" });

  }
  afficherTout() {
    console.log(this.personneForm.value);
    console.log(this.personneForm.value.nom);
    console.log(this.personneForm.controls.nom.value);
    console.log(this.personneForm.get('nom')?.value);
    this.personneForm.reset()
  }
}
