import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { ExchangeComponent } from './exchange/exchange.component';

const routes: Routes = [
  { path: '', redirectTo: 'exchange', pathMatch: 'full' },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'exchange-rate', component: ExchangeRateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
