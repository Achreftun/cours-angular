import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { TableauComponent } from './tableau/tableau.component';
import { CalculComponent } from './calcul/calcul.component';
import { VehiculeModule } from '../vehicule/vehicule.module';
import { CalculetteComponent } from './calculette/calculette.component';


@NgModule({
  declarations: [
    TableauComponent,
    CalculComponent,
    CalculetteComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    VehiculeModule
  ]
})
export class ExerciceModule { }
