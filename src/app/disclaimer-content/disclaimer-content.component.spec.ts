import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerContentComponent } from './disclaimer-content.component';

describe('DisclaimerContentComponent', () => {
  let component: DisclaimerContentComponent;
  let fixture: ComponentFixture<DisclaimerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclaimerContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisclaimerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
