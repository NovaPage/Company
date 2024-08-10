import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MiperfilComponent } from './miperfil/miperfil.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path:'portfolio', component: PortfolioComponent },
  { path: 'miperfil', component: MiperfilComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Redirige a 'main' por defecto
  { path: '**', component: MainComponent } // Ruta comodín
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
