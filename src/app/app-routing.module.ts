import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { Index1Component } from './dashboard/index1/index1.component';
import { MyWalletsComponent } from './my-wallets/my-wallets.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { MarketCapitalComponent } from './market-capital/market-capital.component';

import { ProfileComponent } from './apps/profile/profile.component';
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

import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
                {path: '', redirectTo: 'page-login', pathMatch: 'full' },
				{
                    path: 'admin', component: AdminComponent, canActivate: [AuthGuard], 
                      children: [
                        {path: '', component: Index1Component},
                        {path: 'index', component: Index1Component},
                        {path: 'index-1', component: Index1Component},
                        {path: 'dashboard', component: Index1Component},
                        {path: 'my-wallets', component: MyWalletsComponent},
                        {path: 'transactions', component: TransactionsComponent},
                        {path: 'portofolio', component: PortofolioComponent},
                        {path: 'market-capital', component: MarketCapitalComponent},
                        
                        {path: 'app-profile', component: ProfileComponent},
                        {path: 'app-calender', component: CalenderComponent},
                    ]
                },
                        
                        
                        {path: 'page-register', component: RegisterComponent},
                        {path: 'page-login', component: LoginComponent},
                        {path: 'page-lock-screen', component: LockScreenComponent},
                        {path: 'page-forgot-password', component: ForgotPasswordComponent},
                        {path: 'page-error-400', component: Error400Component},
                        {path: 'page-error-403', component: Error403Component},
                        {path: 'page-error-404', component: Error404Component},
                        {path: 'page-error-500', component: Error500Component},
                        {path: 'page-error-503', component: Error503Component},
                        
                        {path: '**', component: Error404Component},

                
                
              ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
