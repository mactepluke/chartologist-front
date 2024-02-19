import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicBacktestingResults} from "../models/BasicBacktestingResults";
import {environment} from "../../../environments/environment";
import {DatePipe} from "@angular/common";

@Injectable()
export class BacktestingService {

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  runBackTesting(symbol: string, timeframe: string, startDate: Date, endDate: Date, accountBalance: number): Observable<BasicBacktestingResults> {
    return this.http.get<BasicBacktestingResults>
    (
      `${environment.backend_address}/dummytrades/getbasic?` +
      `symbol=${symbol}` +
      `&timeframe=${timeframe}` +
      `&startDate=${this.datePipe.transform(startDate, 'yyyy-MM-dd')}` +
      `&endDate=${this.datePipe.transform(endDate, 'yyyy-MM-dd')}` +
      `&accountBalance=${accountBalance}`
    );
  }

}
