import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoPadraoComponent } from './cartao-padrao.component';

describe('CartaoPadraoComponent', () => {
  let component: CartaoPadraoComponent;
  let fixture: ComponentFixture<CartaoPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
