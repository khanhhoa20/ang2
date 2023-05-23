import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockBankAccountComponent } from './unlock-bank-account.component';

describe('UnlockBankAccountComponent', () => {
  let component: UnlockBankAccountComponent;
  let fixture: ComponentFixture<UnlockBankAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnlockBankAccountComponent]
    });
    fixture = TestBed.createComponent(UnlockBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
