import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './adresse/adresse.component';
import { FormComponent } from './form/form.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ObservableComponent } from './observable/observable.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

const routes: Routes = [
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'form', component: FormComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'address', redirectTo: '/adresse' },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent }, // : pour dire paramètre
  { path: 'observable', component: ObservableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
