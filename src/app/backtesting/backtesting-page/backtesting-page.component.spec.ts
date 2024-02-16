import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktestingPageComponent } from './backtesting-page.component';

describe('BacktestingPageComponent', () => {
  let component: BacktestingPageComponent;
  let fixture: ComponentFixture<BacktestingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacktestingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BacktestingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
