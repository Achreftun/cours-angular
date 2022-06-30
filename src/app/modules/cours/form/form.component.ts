import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  personneForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nom: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]{2,10}$/)]),
    prenom: new FormControl('', [Validators.required, checkPrenomValidator]),
  });
  constructor() { }

  ngOnInit(): void {
    // const personne: Personne = { id: 105, nom: "wick", "prenom": "john" };
    //  this.personneForm.patchValue({ id: 105, nom: "wick" });
    // this.personneForm.setValue({ id: 105, nom: "wick", "prenom": "john" });
    // this.personneForm.controls.prenom.valueChanges.subscribe(value => {
    //   console.log(value)
    // })

  }
  afficherTout() {
    console.log(this.personneForm.value);
    // console.log(this.personneForm.value.nom);
    // console.log(this.personneForm.controls.nom.value);
    // console.log(this.personneForm.get('nom')?.value);
    this.personneForm.reset()
  }
}

function checkPrenomValidator(control: FormControl): null | object {
  console.log(control.value)
  const str: string = control.value ?? "";
  if (str[0] >= 'A' && str[0] <= 'Z') {
    return null;
  } else {
    return {
      majuscule: 'Le prénom doit commencer par une lettre en majuscule'
    };
  }
}
