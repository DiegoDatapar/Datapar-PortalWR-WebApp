import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapTypeAheadHttpComponent } from './ng-bootstrap-type-ahead-http.component';

describe('NgBootstrapTypeAheadHttpComponent', () => {
  let component: NgBootstrapTypeAheadHttpComponent;
  let fixture: ComponentFixture<NgBootstrapTypeAheadHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBootstrapTypeAheadHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapTypeAheadHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
