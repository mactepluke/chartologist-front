import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationPageComponent } from './automation-page.component';

describe('TradingBotPageComponent', () => {
  let component: AutomationPageComponent;
  let fixture: ComponentFixture<AutomationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
