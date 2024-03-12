import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesTabComponent } from './features-tab.component';

describe('FeaturesTabComponent', () => {
  let component: FeaturesTabComponent;
  let fixture: ComponentFixture<FeaturesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
