import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculComponent } from './calcul/calcul.component';
import { CalculetteComponent } from './calculette/calculette.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { ListComponent } from './list/list.component';
import { TableauComponent } from './tableau/tableau.component';

const routes: Routes = [
  { path: 'calcul/:op', component: CalculComponent },
  { path: 'tableau/:id', component: TableauComponent },
  { path: 'calculette', component: CalculetteComponent },
  { path: 'commentaire', component: CommentaireComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
