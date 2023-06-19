import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllBankAccountComponent } from './find-all-bank-account.component';

describe('FindAllBankAccountComponent', () => {
  let component: FindAllBankAccountComponent;
  let fixture: ComponentFixture<FindAllBankAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindAllBankAccountComponent]
    });
    fixture = TestBed.createComponent(FindAllBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
