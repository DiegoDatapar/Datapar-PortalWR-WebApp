import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaDadosSimplesComponent } from './tabela-dados-simples.component';

describe('TabelaDadosSimplesComponent', () => {
  let component: TabelaDadosSimplesComponent;
  let fixture: ComponentFixture<TabelaDadosSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaDadosSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaDadosSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
