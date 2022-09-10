import { NgModule } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { RouterModule, Routes } from '@angular/router';
import { JornadaComponent } from './jornada/jornada.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [  
{ path: '', redirectTo: "/home", pathMatch: "full"},
{ path: 'home', component: HomeComponent},
{ path: 'contato', component: ContatoComponent},
{ path: 'faq', component: FaqComponent},
{ path: 'jornada', component: JornadaComponent},
{ path: 'dashboard', component: DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
