import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from "@angular/material/datepicker";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {BacktestingSettings} from "../../models/BacktestingSettings";

interface MenuItems {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'sycm-backtesting-settings-panel',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatLabel,
    MatFormField,
    MatDateRangeInput,
    ReactiveFormsModule,
    MatDatepickerToggle,
    MatDateRangePicker,
    JsonPipe,
    MatError,
    MatHint,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIcon,
    MatSelectModule,
    MatInput,
    MatButton
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './backtesting-settings-panel.component.html',
  styleUrl: './backtesting-settings-panel.component.css'
})
//TODO Fetch these hardcoded values from the backend
export class BacktestingSettingsPanelComponent implements OnInit {
  minDate = new Date(2023, 7, 26);
  maxDate = new Date(2024, 1, 15);
  markets: MenuItems[] = [
    {value: 'cryptocurrency', viewValue: 'Cryptocurrency'}
  ];
  symbols: MenuItems[] = [
    {value: 'BTC_USD', viewValue: 'BTC/USD'}
  ];
  timeFrames: MenuItems[] = [
    {value: 'DAY', viewValue: 'Day'},
    {value: 'FOUR_HOUR', viewValue: '4-Hour'}
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      market: [this.markets[0].value],
      symbol: [this.symbols[0].value],
      timeframe: [this.timeFrames[0].value],
      range: this.formBuilder.group({
        start: [this.minDate],
        end: [this.maxDate]
      }),
      balance: [10000]
    });
  }

  @Output()
  settings: EventEmitter<BacktestingSettings> = new EventEmitter<BacktestingSettings>();
  form!: FormGroup;


  onRunBacktesting() {
    let settings = this.form.value;
    console.log(JSON.stringify(settings));
    this.settings.emit(settings);
  }

}


