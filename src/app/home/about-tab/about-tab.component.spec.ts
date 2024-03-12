import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTabComponent } from './about-tab.component';

describe('AboutTabComponent', () => {
  let component: AboutTabComponent;
  let fixture: ComponentFixture<AboutTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
