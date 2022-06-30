import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  personnes: Array<{}> = [];
  personneForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.personneForm = fb.group({
      nom: [], // formControl
      prenom: [], // formControl
      commentaires: this.fb.array([
      ]) // formArray
    })
  }
  get commentaires() {
    return this.personneForm.controls['commentaires'] as FormArray;
  }
  ngOnInit(): void {
  }
  afficherTout() {
    this.personnes.push(this.personneForm.value);
    console.log(this.personnes)
    this.personneForm.reset();
    this.commentaires.clear();
  }
  ajouterCommentaire() {
    this.commentaires.push(this.fb.group({
      titre: [],
      categorie: [],
      contenu: []
    }))
  }
}
