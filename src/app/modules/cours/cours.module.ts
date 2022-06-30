import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { AdresseComponent } from './adresse/adresse.component';
import { ObservableComponent } from './observable/observable.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { SharedModule } from '../shared/shared.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdresseComponent,
    ObservableComponent,
    StagiaireComponent,
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CoursModule { }
