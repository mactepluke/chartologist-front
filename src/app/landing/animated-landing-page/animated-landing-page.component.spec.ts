import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedLandingPageComponent } from './animated-landing-page.component';

describe('AnimatedLandingPageComponent', () => {
  let component: AnimatedLandingPageComponent;
  let fixture: ComponentFixture<AnimatedLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimatedLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
