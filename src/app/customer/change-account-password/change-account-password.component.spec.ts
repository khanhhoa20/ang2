import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAccountPasswordComponent } from './change-account-password.component';

describe('ChangeAccountPasswordComponent', () => {
  let component: ChangeAccountPasswordComponent;
  let fixture: ComponentFixture<ChangeAccountPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeAccountPasswordComponent],
    });
    fixture = TestBed.createComponent(ChangeAccountPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
