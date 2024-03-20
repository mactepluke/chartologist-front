import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountPanelComponent } from './create-account-panel.component';

describe('CreateAccountPanelComponent', () => {
  let component: CreateAccountPanelComponent;
  let fixture: ComponentFixture<CreateAccountPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccountPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAccountPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
