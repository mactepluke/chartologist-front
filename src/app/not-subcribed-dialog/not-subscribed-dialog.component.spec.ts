import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSubscribedDialogComponent } from './not-subscribed-dialog.component';

describe('NotSubcribedDialogComponent', () => {
  let component: NotSubscribedDialogComponent;
  let fixture: ComponentFixture<NotSubscribedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotSubscribedDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotSubscribedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
