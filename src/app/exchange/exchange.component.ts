import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of, Subscription } from 'rxjs';
import { Icurrency } from '../models/currency';
import { IExchange } from '../models/IReqExchange';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit, OnDestroy {

  @ViewChild('matInputRef') element: ElementRef<HTMLInputElement>;

  constructor(
    private exchangeS: ExchangeService
  ) { }

  private subscription = new Subscription();
  public currencyData: Icurrency[];
  public formConvert: FormGroup;
  public respConvert: IExchange = {
    amount: null,
    amountTypeExchange: null,
    currencyFrom: null,
    currencyTo: null,
    exchangeRate: null
  };

  ngOnInit(): void {
    this.formConvert = new FormGroup({
      amount: new FormControl('', Validators.required),
      currencyFrom: new FormControl('', Validators.required),
      currencyTo: new FormControl('', Validators.required),
    });

    this.subscription.add(
      this.exchangeS.getCurrencies().subscribe(
        resp => {
          this.currencyData = resp;
          this.currencyFrom.setValue(resp[0].currency_id);
        }
      )
    );
  }

  get currencyFrom() {
    return this.formConvert.get('currencyFrom');
  }

  get currencyTo() {
    return this.formConvert.get('currencyTo');
  }

  convertAmount() {
    if (this.formConvert.invalid) return false;
    this.exchangeS.convertExchange(this.formConvert.value).subscribe(
      resp => {
        this.respConvert = resp;
      }
    );
  }

  resetForm(): void {
    this.formConvert.get('amount').reset();
    this.currencyTo.reset();
    this.element.nativeElement.focus();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
