import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SharedService} from './shared.service';
import { NgbdSortableHeader } from './sortable.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NestableModule } from 'ngx-nestable';
import { NgxSpinnerModule } from "ngx-spinner";
import { LightboxModule } from 'ngx-lightbox';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';



FullCalendarModule.registerPlugins([
	dayGridPlugin,
	timeGridPlugin,
	listPlugin,
	interactionPlugin
]);

import { MetismenuAngularModule } from "@metismenu/angular";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';



/* #########################  SITE PAGES COMPONENT ###################*/

import { AdminComponent } from './admin/admin.component';


import { LoadingComponent } from './elements/loading/loading.component';
import { NavHeaderComponent } from './elements/nav-header/nav-header.component';
import { NavigationComponent } from './elements/navigation/navigation.component';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';

import { Index1Component } from './dashboard/index1/index1.component';
import { Graph1Component } from './elements/dashboard1/graph1/graph1.component';
import { Graph2Component } from './elements/dashboard1/graph2/graph2.component';
import { Graph3Component } from './elements/dashboard1/graph3/graph3.component';
import { Graph4Component } from './elements/dashboard1/graph4/graph4.component';
import { GraphMarketOverviewComponent } from './elements/dashboard1/graph-market-overview/graph-market-overview.component';
import { WeeklyComponent } from './elements/dashboard1/graph-market-overview/weekly/weekly.component';
import { MonthlyComponent } from './elements/dashboard1/graph-market-overview/monthly/monthly.component';
import { YearlyComponent } from './elements/dashboard1/graph-market-overview/yearly/yearly.component';
import { GraphCryptoStatisticsComponent } from './elements/dashboard1/graph-crypto-statistics/graph-crypto-statistics.component';
import { QuickTransferComponent } from './elements/dashboard1/quick-transfer/quick-transfer.component';
import { SellOrderComponent } from './elements/dashboard1/sell-order/sell-order.component';
import { BuyOrderComponent } from './elements/dashboard1/buy-order/buy-order.component';
import { Das2Graph1Component } from './elements/dashboard2/das2-graph1/das2-graph1.component';
import { Das2Graph2Component } from './elements/dashboard2/das2-graph2/das2-graph2.component';
import { Das2Graph3Component } from './elements/dashboard2/das2-graph3/das2-graph3.component';
import { GraphCoinChartComponent } from './elements/dashboard2/graph-coin-chart/graph-coin-chart.component';
import { MarketInfoComponent } from './elements/dashboard2/market-info/market-info.component';
import { DashboardCrousal1Component } from './elements/dashboard2/dashboard-crousal1/dashboard-crousal1.component';
import { Das2QuickTransferComponent } from './elements/dashboard2/das2-quick-transfer/das2-quick-transfer.component';
import { Das2SellOrderComponent } from './elements/dashboard2/das2-sell-order/das2-sell-order.component';
import { Das2BuyOrderComponent } from './elements/dashboard2/das2-buy-order/das2-buy-order.component';
import { BuySellFormComponent } from './elements/dashboard3/buy-sell-form/buy-sell-form.component';
import { Das3Graph1Component } from './elements/dashboard3/das3-graph1/das3-graph1.component';
import { AboutComponent } from './elements/coin-details/about/about.component';
import { CoinDetailQuickTransferComponent } from './elements/coin-details/coin-detail-quick-transfer/coin-detail-quick-transfer.component';

import { MyWalletsComponent } from './my-wallets/my-wallets.component';
import { CardSliderComponent } from './elements/my-wallets/card-slider/card-slider.component';
import { CardDetailsComponent } from './elements/my-wallets/card-details/card-details.component';
import { GraphMainLimitComponent } from './elements/my-wallets/card-details/graph-main-limit/graph-main-limit.component';
import { GraphSecondsComponent } from './elements/my-wallets/card-details/graph-seconds/graph-seconds.component';
import { GraphOthersComponent } from './elements/my-wallets/card-details/graph-others/graph-others.component';
import { DetailPieChartComponent } from './elements/my-wallets/card-details/detail-pie-chart/detail-pie-chart.component';
import { WalletCoinChartComponent } from './elements/my-wallets/wallet-coin-chart/wallet-coin-chart.component';
import { WalletActivityComponent } from './elements/my-wallets/wallet-activity/wallet-activity.component';

import { TransactionsComponent } from './transactions/transactions.component';

import { PortofolioComponent } from './portofolio/portofolio.component';
import { MyProfileComponent } from './elements/portofolio/my-profile/my-profile.component';
import { CoinHoldingComponent } from './elements/portofolio/coin-holding/coin-holding.component';
import { CurrentGraph1Component } from './elements/portofolio/current-graph1/current-graph1.component';
import { CurrentGraph2Component } from './elements/portofolio/current-graph2/current-graph2.component';

import { MarketCapitalComponent } from './market-capital/market-capital.component';

import { ProfileComponent } from './apps/profile/profile.component';
import { UserStatisticsComponent } from './elements/profile/user-statistics/user-statistics.component';
import { InterestComponent } from './elements/profile/interest/interest.component';
import { LatestNewsComponent } from './elements/profile/latest-news/latest-news.component';
import { HighlightsComponent } from './elements/profile/highlights/highlights.component';
import { CalenderComponent } from './apps/calender/calender.component';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LockScreenComponent } from './pages/lock-screen/lock-screen.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { Error400Component } from './pages/error400/error400.component';
import { Error403Component } from './pages/error403/error403.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { Error503Component } from './pages/error503/error503.component';



@NgModule({
  declarations: [
    AppComponent,
    NgbdSortableHeader,
    
    AdminComponent,
    NavHeaderComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    
    Index1Component,
    Graph1Component,
    Graph2Component,
    Graph3Component,
    Graph4Component,
    GraphMarketOverviewComponent,
    WeeklyComponent,
    MonthlyComponent,
    YearlyComponent,
    GraphCryptoStatisticsComponent,
    QuickTransferComponent,
    SellOrderComponent,
    BuyOrderComponent,
   
    Das2Graph1Component,
    Das2Graph2Component,
    Das2Graph3Component,
    GraphCoinChartComponent,
    MarketInfoComponent,
    DashboardCrousal1Component,
    Das2QuickTransferComponent,
    Das2SellOrderComponent,
    Das2BuyOrderComponent,
    
    BuySellFormComponent,
    Das3Graph1Component,
    
    AboutComponent,
    CoinDetailQuickTransferComponent,
    
    MyWalletsComponent,
    CardSliderComponent,
    CardDetailsComponent,
    GraphMainLimitComponent,
    GraphSecondsComponent,
    GraphOthersComponent,
    DetailPieChartComponent,
    WalletCoinChartComponent,
    WalletActivityComponent,
    
    TransactionsComponent,
    
    PortofolioComponent,
    MyProfileComponent,
    CoinHoldingComponent,
    CurrentGraph1Component,
    CurrentGraph2Component,
    
    MarketCapitalComponent,
      
    ProfileComponent,
    UserStatisticsComponent,
    InterestComponent,
    LatestNewsComponent,
    HighlightsComponent,
    CalenderComponent,
    
    
	RegisterComponent,
	LoginComponent,
	LockScreenComponent,
	ForgotPasswordComponent,
	Error400Component,
	Error403Component,
	Error404Component,
	Error500Component,
	Error503Component,
	
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ChartsModule,
    NgApexchartsModule,
    NestableModule,
    NgxSpinnerModule,
    LightboxModule,
    FullCalendarModule,
    MetismenuAngularModule,
    PerfectScrollbarModule,
    NgxDropzoneModule,
    CarouselModule,
    
    MatListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    DragDropModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [
		SharedService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
