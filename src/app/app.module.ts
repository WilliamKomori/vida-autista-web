import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { JornadaComponent } from './jornada/jornada.component';
import { AgendaComponent } from './agenda/agenda.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { JornadaAcompanhamentoComponent } from './jornada-acompanhamento/jornada-acompanhamento.component';
import { AnotacoesComponent } from './anotacoes/anotacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    FaqComponent,
    JornadaComponent,
    AgendaComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AccordionComponent,
    AlertsComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ChartsApexchartsComponent,
    ChartsChartjsComponent,
    FormsEditorsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    IconsBootstrapComponent,
    IconsBoxiconsComponent,
    IconsRemixComponent,
    ListGroupComponent,
    ModalComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TablesDataComponent,
    TablesGeneralComponent,
    TabsComponent,
    TooltipsComponent,
    CalendarioComponent,
    MeuPerfilComponent,
    JornadaAcompanhamentoComponent,
    AnotacoesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
