import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktestingSettingsPanelComponent } from './backtesting-settings-panel.component';

describe('BacktestingSettingsPanelComponent', () => {
  let component: BacktestingSettingsPanelComponent;
  let fixture: ComponentFixture<BacktestingSettingsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacktestingSettingsPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BacktestingSettingsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
