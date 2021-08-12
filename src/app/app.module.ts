import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExchangeComponent } from './exchange/exchange.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from './pipes/currency.pipe';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    CurrencyPipe,
    ExchangeRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
