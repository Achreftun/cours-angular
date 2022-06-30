import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculComponent } from './calcul/calcul.component';
import { CalculetteComponent } from './calculette/calculette.component';
import { TableauComponent } from './tableau/tableau.component';

const routes: Routes = [
  { path: 'calcul/:op', component: CalculComponent },
  { path: 'tableau/:id', component: TableauComponent },
  { path: 'calculette', component: CalculetteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
