import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacaoSuperiorComponent } from './navegacao-superior.component';

describe('NavegacaoSuperiorComponent', () => {
  let component: NavegacaoSuperiorComponent;
  let fixture: ComponentFixture<NavegacaoSuperiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacaoSuperiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacaoSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
