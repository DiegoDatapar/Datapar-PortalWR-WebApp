import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCamposComponent } from './container-campos.component';

describe('ContainerCamposComponent', () => {
  let component: ContainerCamposComponent;
  let fixture: ComponentFixture<ContainerCamposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerCamposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
