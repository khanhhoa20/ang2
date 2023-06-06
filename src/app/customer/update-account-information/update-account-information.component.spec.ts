import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountInformationComponent } from './update-account-information.component';

describe('UpdateAccountInformationComponent', () => {
  let component: UpdateAccountInformationComponent;
  let fixture: ComponentFixture<UpdateAccountInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAccountInformationComponent]
    });
    fixture = TestBed.createComponent(UpdateAccountInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
