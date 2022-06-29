import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './composants/menu/menu.component';
import { ErrorComponent } from './composants/error/error.component';
import { HomeComponent } from './composants/home/home.component';
import { HeaderComponent } from './composants/header/header.component';
import { SharedModule } from './modules/shared/shared.module';

// module principal d'Angular
// Par défaut tout est défini dans le module principal
// dans le module principal, on a un composant principal

// Annotation : Décorateur
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ErrorComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule, // CommonModule + tout ce qui concerne le navigateur
    AppRoutingModule,
    SharedModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('app module')
  }
}
