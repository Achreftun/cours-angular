import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { CalculComponent } from './composants/calcul/calcul.component';
import { ObservableComponent } from './composants/observable/observable.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { TableauComponent } from './composants/tableau/tableau.component';


// mapping path component
const routes: Routes = [
  { path: 'adresse', component: AdresseComponent },
  { path: 'calcul/:op', component: CalculComponent },
  { path: 'tableau/:id', component: TableauComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent }, // : pour dire paramètre
  { path: 'observable', component: ObservableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
