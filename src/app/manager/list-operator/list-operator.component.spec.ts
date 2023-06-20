import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOperatorComponent } from './list-operator.component';

describe('ListOperatorComponent', () => {
  let component: ListOperatorComponent;
  let fixture: ComponentFixture<ListOperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOperatorComponent]
    });
    fixture = TestBed.createComponent(ListOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
