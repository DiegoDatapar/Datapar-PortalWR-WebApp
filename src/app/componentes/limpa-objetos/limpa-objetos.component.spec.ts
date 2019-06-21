import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpaObjetosComponent } from './limpa-objetos.component';

describe('LimpaObjetosComponent', () => {
  let component: LimpaObjetosComponent;
  let fixture: ComponentFixture<LimpaObjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpaObjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpaObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
