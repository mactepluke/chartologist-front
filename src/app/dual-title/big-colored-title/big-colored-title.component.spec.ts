import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigColoredTitleComponent } from './big-colored-title.component';

describe('BigColoredTitleComponent', () => {
  let component: BigColoredTitleComponent;
  let fixture: ComponentFixture<BigColoredTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigColoredTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigColoredTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
