import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapDropdownComponent } from './ng-bootstrap-dropdown.component';

describe('NgBootstrapDropdownComponent', () => {
  let component: NgBootstrapDropdownComponent;
  let fixture: ComponentFixture<NgBootstrapDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
