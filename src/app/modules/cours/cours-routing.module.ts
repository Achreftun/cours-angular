import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ObservableComponent } from './observable/observable.component';
import { PersonneDetailsComponent } from './personne-details/personne-details.component';
import { PersonneReactiveDetailsComponent } from './personne-reactive-details/personne-reactive-details.component';
import { PersonneReactiveComponent } from './personne-reactive/personne-reactive.component';
import { PersonneComponent } from './personne/personne.component';

const routes: Routes = [
  { path: "personne", component: PersonneComponent, canActivate: [AuthGuard] },
  { path: "personne-reactive", component: PersonneReactiveComponent },
  { path: "personne-details/:num", component: PersonneDetailsComponent },
  { path: "personne-reactive-details/:num", component: PersonneReactiveDetailsComponent },
  { path: "observable", component: ObservableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
