import { NgModule } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { RouterModule, Routes } from '@angular/router';
import { JornadaComponent } from './jornada/jornada.component';
import { JornadaAcompanhamentoComponent } from './jornada-acompanhamento/jornada-acompanhamento.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { AnotacoesComponent } from './anotacoes/anotacoes.component';

const routes: Routes = [
{ path: '', redirectTo: "/home", pathMatch: "full"},
{ path: 'home', component: HomeComponent},
{ path: 'contato', component: ContatoComponent},
{ path: 'faq', component: FaqComponent},
{ path: 'jornada', component: JornadaComponent},
{ path: 'jornada-acompanhamento', component: JornadaAcompanhamentoComponent},
{ path: 'dashboard', component: DashboardComponent},
{ path: 'agenda', component: AgendaComponent},
{ path: 'agenda-paciente/:id', component: AgendaComponent},
{ path: 'meu-perfil', component: MeuPerfilComponent},
{ path: 'anotacoes', component: AnotacoesComponent},



// Componentes
{ path: 'alerts', component: AlertsComponent},
{ path: 'accordion', component: AccordionComponent},
{ path: 'badges', component: BadgesComponent},
{ path: 'breadcrumbs', component: BreadcrumbsComponent},
{ path: 'buttons', component: ButtonsComponent},
{ path: 'cards', component: CardsComponent},
{ path: 'carousel', component: CarouselComponent},
{ path: 'list-group', component: ListGroupComponent},
{ path: 'modal', component: ModalComponent},
{ path: 'tabs', component: TabsComponent},
{ path: 'pagination', component: PaginationComponent},
{ path: 'progress', component: ProgressComponent},
{ path: 'spinners', component: SpinnersComponent},
{ path: 'tooltips', component: TooltipsComponent},
{ path: 'form-elements', component: FormsElementsComponent},
{ path: 'form-layouts', component: FormsLayoutsComponent},
{ path: 'form-editors', component: FormsEditorsComponent},
{ path: 'tables-general', component: TablesGeneralComponent},
{ path: 'tables-data', component: TablesDataComponent},
{ path: 'charts-chartjs', component: ChartsChartjsComponent},
{ path: 'charts-apexcharts', component: ChartsApexchartsComponent},
{ path: 'icons-bootstrap', component: IconsBootstrapComponent},
{ path: 'icons-remix', component: IconsRemixComponent},
{ path: 'icons-boxicons', component: IconsBoxiconsComponent}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
