import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTabGroupComponent } from './home-tab-group.component';

describe('HomeTabGroupComponent', () => {
  let component: HomeTabGroupComponent;
  let fixture: ComponentFixture<HomeTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTabGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
