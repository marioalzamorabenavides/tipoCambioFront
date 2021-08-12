export interface IReqExchange {
    "amount": number;
    "currencyFrom": number;
    "currencyTo": number;
}

export interface IExchange extends IReqExchange {
    "amountTypeExchange": number;
    "exchangeRate": number;
}

export interface IResExchange {
    exchange_id: number;
    currency_change_from: number;
    currency_change_to: number;
    exchange_rate: number;
    exchange_register: string;
    exchange_update: string;
}