import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { TableauComponent } from './tableau/tableau.component';
import { CalculComponent } from './calcul/calcul.component';
import { VehiculeModule } from '../vehicule/vehicule.module';
import { CalculetteComponent } from './calculette/calculette.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    TableauComponent,
    CalculComponent,
    CalculetteComponent,
    CommentaireComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    VehiculeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExerciceModule { }
