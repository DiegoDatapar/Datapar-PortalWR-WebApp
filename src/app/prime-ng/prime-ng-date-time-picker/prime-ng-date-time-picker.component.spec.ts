import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgDateTimePickerComponent } from './prime-ng-date-time-picker.component';

describe('PrimeNgDateTimePickerComponent', () => {
  let component: PrimeNgDateTimePickerComponent;
  let fixture: ComponentFixture<PrimeNgDateTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeNgDateTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeNgDateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
