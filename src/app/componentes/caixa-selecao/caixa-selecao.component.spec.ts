import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaSelecaoComponent } from './caixa-selecao.component';

describe('CaixaSelecaoComponent', () => {
  let component: CaixaSelecaoComponent;
  let fixture: ComponentFixture<CaixaSelecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaSelecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
