import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapDateTimePickerComponent } from './ng-bootstrap-date-time-picker.component';

describe('NgBootstrapDateTimePickerComponent', () => {
  let component: NgBootstrapDateTimePickerComponent;
  let fixture: ComponentFixture<NgBootstrapDateTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapDateTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapDateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
