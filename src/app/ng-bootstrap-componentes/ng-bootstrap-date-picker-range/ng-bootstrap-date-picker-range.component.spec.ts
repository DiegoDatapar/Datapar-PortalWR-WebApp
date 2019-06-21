import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapDatePickerRangeComponent } from './ng-bootstrap-date-picker-range.component';

describe('NgBootstrapDatePickerRangeComponent', () => {
  let component: NgBootstrapDatePickerRangeComponent;
  let fixture: ComponentFixture<NgBootstrapDatePickerRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapDatePickerRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapDatePickerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
