import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCreateBankAccountComponent } from './register-create-bank-account.component';

describe('RegisterCreateBankAccountComponent', () => {
  let component: RegisterCreateBankAccountComponent;
  let fixture: ComponentFixture<RegisterCreateBankAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCreateBankAccountComponent],
    });
    fixture = TestBed.createComponent(RegisterCreateBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
