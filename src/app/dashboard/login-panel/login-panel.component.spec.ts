import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPanelComponent } from './login-panel.component';

describe('LoginPanelComponent', () => {
  let component: LoginPanelComponent;
  let fixture: ComponentFixture<LoginPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
