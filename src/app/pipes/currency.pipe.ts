import { Pipe, PipeTransform } from '@angular/core';
import { Icurrency } from '../models/currency';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, args: Icurrency[]): Icurrency {
    if(value===null || args === undefined) return null;
    return args.find(r => r.currency_id ===value);
  }

}
