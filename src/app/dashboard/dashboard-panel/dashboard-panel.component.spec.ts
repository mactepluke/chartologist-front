import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPanelComponent } from './dashboard-panel.component';

describe('DashboardPanelComponent', () => {
  let component: DashboardPanelComponent;
  let fixture: ComponentFixture<DashboardPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
