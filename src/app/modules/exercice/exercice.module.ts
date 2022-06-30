import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { TableauComponent } from './tableau/tableau.component';
import { CalculComponent } from './calcul/calcul.component';
import { VehiculeModule } from '../vehicule/vehicule.module';
import { CalculetteComponent } from './calculette/calculette.component';
import { FormsModule } from '@angular/forms';
import { CommentaireComponent } from './commentaire/commentaire.component';


@NgModule({
  declarations: [
    TableauComponent,
    CalculComponent,
    CalculetteComponent,
    CommentaireComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    VehiculeModule,
    FormsModule
  ]
})
export class ExerciceModule { }
