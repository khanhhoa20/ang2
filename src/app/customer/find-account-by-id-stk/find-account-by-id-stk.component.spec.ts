import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAccountByIdStkComponent } from './find-account-by-id-stk.component';

describe('FindAccountByIdStkComponent', () => {
  let component: FindAccountByIdStkComponent;
  let fixture: ComponentFixture<FindAccountByIdStkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindAccountByIdStkComponent]
    });
    fixture = TestBed.createComponent(FindAccountByIdStkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
