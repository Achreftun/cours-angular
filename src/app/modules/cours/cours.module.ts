import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { AdresseComponent } from './adresse/adresse.component';
import { ObservableComponent } from './observable/observable.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { SharedModule } from '../shared/shared.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { PersonneComponent } from './personne/personne.component';
import { DetailsPersonneComponent } from './details-personne/details-personne.component';


@NgModule({
  declarations: [
    AdresseComponent,
    ObservableComponent,
    StagiaireComponent,
    FormulaireComponent,
    FormComponent,
    PersonneComponent,
    DetailsPersonneComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoursModule { }
