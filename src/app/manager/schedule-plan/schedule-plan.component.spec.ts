import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePlanComponent } from './schedule-plan.component';

describe('SchedulePlanComponent', () => {
  let component: SchedulePlanComponent;
  let fixture: ComponentFixture<SchedulePlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulePlanComponent]
    });
    fixture = TestBed.createComponent(SchedulePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
