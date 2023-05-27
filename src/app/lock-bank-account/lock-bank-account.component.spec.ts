import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockBankAccountComponent } from './lock-bank-account.component';

describe('LockBankAccountComponent', () => {
  let component: LockBankAccountComponent;
  let fixture: ComponentFixture<LockBankAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LockBankAccountComponent]
    });
    fixture = TestBed.createComponent(LockBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
