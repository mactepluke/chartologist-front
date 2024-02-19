import {Component, EventEmitter, Output} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from "@angular/material/datepicker";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

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
export class BacktestingSettingsPanelComponent {
  minDate = new Date(2023, 8, 27);
  maxDate = new Date(2024, 2, 23);
  markets: MenuItems[] = [
    {value: 'cryptocurrency-0', viewValue: 'Cryptocurrency'}
  ];
  symbols: MenuItems[] = [
    {value: 'btcusd-0', viewValue: 'BTC/USD'}
  ];
  timeFrames: MenuItems[] = [
    {value: 'day-0', viewValue: 'Day'},
    {value: 'fourhour-1', viewValue: '4 Hour'}
  ];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  @Output()
  launchBacktestingEmitter = new EventEmitter();

  onRunBacktesting() {
    this.launchBacktestingEmitter.emit();
    console.log('Running backtest...');
  }

}


