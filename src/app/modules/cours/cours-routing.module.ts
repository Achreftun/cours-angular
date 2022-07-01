import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClavierComponent } from '../exercice/clavier/clavier.component';
import { AdresseComponent } from './adresse/adresse.component';
import { DetailsPersonneComponent } from './details-personne/details-personne.component';
import { FormComponent } from './form/form.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ObservableComponent } from './observable/observable.component';
import { ParentComponent } from './parent/parent.component';
import { PereComponent } from './pere/pere.component';
import { PersonneComponent } from './personne/personne.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

const routes: Routes = [
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'form', component: FormComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'address', redirectTo: '/adresse' },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent }, // : pour dire paramètre
  { path: 'observable', component: ObservableComponent },
  { path: 'personne', component: PersonneComponent },
  { path: 'details-personne/:id', component: DetailsPersonneComponent },
  { path: 'pere', component: PereComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'clavier', component: ClavierComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
