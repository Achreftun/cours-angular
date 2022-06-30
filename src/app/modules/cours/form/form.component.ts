import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { checkPrenomValidator } from './validators/personne.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  personneForm: FormGroup;
  // personneForm = new FormGroup({
  //   id: new FormControl('', Validators.required),
  //   nom: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]{2,10}$/)]),
  //   prenom: new FormControl('', [Validators.required, checkPrenomValidator]),
  //   adresse: new FormGroup({
  //     rue: new FormControl(),
  //     codePostal: new FormControl(),
  //     ville: new FormControl(),
  //   })
  // });
  constructor(private fb: FormBuilder) {
    this.personneForm = this.fb.group({
      id: ['', Validators.required],
      nom: ['', [Validators.required, Validators.pattern(/^[A-Z][a-z]{2,10}$/)]],
      prenom: ['', [Validators.required, checkPrenomValidator]],
      adresse: this.fb.group({
        rue: [],
        codePostal: [],
        ville: [],
      }),
      sports: this.fb.array([]),
    });
  }

  ngOnInit(): void {

    // const personne: Personne = { id: 105, nom: "wick", "prenom": "john" };
    //  this.personneForm.patchValue({ id: 105, nom: "wick" });
    // this.personneForm.setValue({ id: 105, nom: "wick", "prenom": "john" });
    // this.personneForm.controls.prenom.valueChanges.subscribe(value => {
    //   console.log(value)
    // })
  }

  get id() {
    return this.personneForm.controls['id'];
  }
  get nom() {
    return this.personneForm.controls['nom'];
  }
  get prenom() {
    return this.personneForm.controls['prenom'];
  }
  get sports() {
    return this.personneForm.controls['sports'] as FormArray;
  }
  afficherTout() {
    console.log(this.personneForm.value);
    // console.log(this.personneForm.value.nom);
    // console.log(this.personneForm.controls.nom.value);
    // console.log(this.personneForm.get('nom')?.value);
    console.log(this.sports.value);
    this.personneForm.reset();
    this.sports.clear();

  }
  ajouterSport() {
    this.sports.push(this.fb.control(''))
  }
}


