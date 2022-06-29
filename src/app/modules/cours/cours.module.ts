import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { AdresseComponent } from './adresse/adresse.component';
import { ObservableComponent } from './observable/observable.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';


@NgModule({
  declarations: [
    AdresseComponent,
    ObservableComponent,
    StagiaireComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule
  ]
})
export class CoursModule { }
