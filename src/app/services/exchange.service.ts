import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Icurrency } from '../models/currency';
import { IExchange, IReqExchange, IResExchange } from '../models/IReqExchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private readonly apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getCurrencies() {
    return this.httpClient.get<Icurrency[]>(`${this.apiUrl}currencies`);
  }

  convertExchange(data: IReqExchange) {
    return this.httpClient.post<IExchange>(`${this.apiUrl}exchange`, data);
  }

  getExchanges(currencyFrom: string) {
    const param = new HttpParams().set('exchangeFrom', currencyFrom);

    return this.httpClient.get<IResExchange[]>(`${this.apiUrl}exchange`, { params: param });
  }

  putExchange(exchangeId, body) {
    return this.httpClient.put<IResExchange>(`${this.apiUrl}exchange/${exchangeId}`, body);
  }
}
