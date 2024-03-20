import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountPageComponent } from './create-account-page.component';

describe('CreateAccountPanelComponent', () => {
  let component: CreateAccountPageComponent;
  let fixture: ComponentFixture<CreateAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccountPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
