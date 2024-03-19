import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerDialogComponent } from './disclaimer-dialog.component';

describe('DisclaimerDialogComponent', () => {
  let component: DisclaimerDialogComponent;
  let fixture: ComponentFixture<DisclaimerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclaimerDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisclaimerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
