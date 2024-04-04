import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPurchaseComponent } from './plan-purchase.component';

describe('PlanPurchaseComponent', () => {
  let component: PlanPurchaseComponent;
  let fixture: ComponentFixture<PlanPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanPurchaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
