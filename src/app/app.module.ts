import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './composants/observable/observable.component';

// module principal d'Angular
// Par défaut tout est défini dans le module principal
// dans le module principal, on a un composant principal

// Annotation : Décorateur
@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule, // CommonModule + tout ce qui concerne le navigateur
    AppRoutingModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
