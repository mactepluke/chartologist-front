import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BacktestingResultsPanelComponent} from './backtesting-results-panel.component';

describe('BacktestingResultsComponent', () => {
  let component: BacktestingResultsPanelComponent;
  let fixture: ComponentFixture<BacktestingResultsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacktestingResultsPanelComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BacktestingResultsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
