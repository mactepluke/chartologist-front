import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsPageComponent } from './signals-page.component';

describe('SignalsPageComponent', () => {
  let component: SignalsPageComponent;
  let fixture: ComponentFixture<SignalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
