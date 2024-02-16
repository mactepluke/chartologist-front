import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingBotPageComponent } from './trading-bot-page.component';

describe('TradingBotPageComponent', () => {
  let component: TradingBotPageComponent;
  let fixture: ComponentFixture<TradingBotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingBotPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TradingBotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
