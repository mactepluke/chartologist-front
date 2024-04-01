import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSphereComponent } from './animated-sphere.component';

describe('AnimatedSphereComponent', () => {
  let component: AnimatedSphereComponent;
  let fixture: ComponentFixture<AnimatedSphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedSphereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimatedSphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
