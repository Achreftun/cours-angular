import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { CalculComponent } from './composants/calcul/calcul.component';
import { ErrorComponent } from './composants/error/error.component';
import { HomeComponent } from './composants/home/home.component';
import { ObservableComponent } from './composants/observable/observable.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { TableauComponent } from './composants/tableau/tableau.component';
import { CamionComponent } from './modules/vehicule/camion/camion.component';
import { VoitureComponent } from './modules/vehicule/voiture/voiture.component';


// mapping path component
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'address', redirectTo: '/adresse' },
  { path: 'calcul/:op', component: CalculComponent },
  { path: 'tableau/:id', component: TableauComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent }, // : pour dire paramètre
  { path: 'observable', component: ObservableComponent },
  {
    path: 'vehicule',
    loadChildren: () => import('./modules/vehicule/vehicule.module').then(m => m.VehiculeModule)
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// x/y/z => composant c1
// route x/y/z/c1
