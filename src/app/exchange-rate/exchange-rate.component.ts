import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Icurrency } from '../models/currency';
import { IResExchange } from '../models/IReqExchange';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit, OnDestroy {

  constructor(
    private exchangeS: ExchangeService
  ) { }

  private subscription = new Subscription();
  public currencyData: Icurrency[];
  public typeChange: FormControl;
  public exchangeRate: FormControl;
  public displayedColumns: string[] = [
    'exchange_id',
    'currency_change_from',
    'currency_change_to',
    'exchange_rate',
    'exchange_register',
    'exchange_update',
    'editExchangeRate'
  ];
  public dataSource: IResExchange[];
  public editRate: boolean = false;
  public dataSelected: IResExchange;

  ngOnInit(): void {
    this.typeChange = new FormControl();
    this.exchangeRate = new FormControl(null, Validators.required);

    this.subscription.add(this.typeChange.valueChanges.subscribe(
      resp => {
        this.getExchanges(resp);
      }
    ));

    this.subscription.add(
      this.exchangeS.getCurrencies().subscribe(
        resp => {
          this.currencyData = resp;
        }
      )
    );
  }

  getExchanges(resp) {
    this.subscription.add(this.exchangeS.getExchanges(resp).subscribe(
      resp => {
        this.dataSource = resp;
      }
    ));
  }

  goToEdit(element) {
    this.dataSelected = element;
    this.editRate = true;
  }

  putExchange(){
    this.subscription.add(this.exchangeS.putExchange(this.dataSelected.exchange_id,{
      exchangeRate: this.exchangeRate.value
    }).subscribe(
      resp => {
        this.dataSource.forEach(r=>{
          if(r.exchange_id===resp.exchange_id){
            r.exchange_rate = resp.exchange_rate;
            this.dataSelected = null;
            this.editRate = false;
          }
        })
      }
    ));
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
