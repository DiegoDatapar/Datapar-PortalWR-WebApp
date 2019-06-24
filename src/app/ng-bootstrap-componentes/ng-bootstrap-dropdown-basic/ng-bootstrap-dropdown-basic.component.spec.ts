import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapDropdownBasicComponent } from './ng-bootstrap-dropdown-basic.component';

describe('NgBootstrapDropdownBasicComponent', () => {
  let component: NgBootstrapDropdownBasicComponent;
  let fixture: ComponentFixture<NgBootstrapDropdownBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapDropdownBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapDropdownBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
