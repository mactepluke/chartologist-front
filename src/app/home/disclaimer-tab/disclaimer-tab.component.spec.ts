import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerTabComponent } from './disclaimer-tab.component';

describe('DisclaimerTabComponent', () => {
  let component: DisclaimerTabComponent;
  let fixture: ComponentFixture<DisclaimerTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclaimerTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisclaimerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
