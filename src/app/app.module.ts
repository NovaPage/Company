import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { NavbarmainComponent } from './navbarmain/navbarmain.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MiperfilComponent } from './miperfil/miperfil.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarmainComponent,
    ContactComponent,
    PortfolioComponent,
    MiperfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
