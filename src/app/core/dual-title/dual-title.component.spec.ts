import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualTitleComponent } from './dual-title.component';

describe('DualTitleComponent', () => {
  let component: DualTitleComponent;
  let fixture: ComponentFixture<DualTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DualTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DualTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
