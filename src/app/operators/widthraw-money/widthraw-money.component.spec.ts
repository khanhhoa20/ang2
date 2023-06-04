import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthrawMoneyComponent } from './widthraw-money.component';

describe('WidthrawMoneyComponent', () => {
  let component: WidthrawMoneyComponent;
  let fixture: ComponentFixture<WidthrawMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidthrawMoneyComponent]
    });
    fixture = TestBed.createComponent(WidthrawMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
