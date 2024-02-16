import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerPageComponent } from './disclaimer-page.component';

describe('DisclaimerPageComponent', () => {
  let component: DisclaimerPageComponent;
  let fixture: ComponentFixture<DisclaimerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclaimerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisclaimerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
