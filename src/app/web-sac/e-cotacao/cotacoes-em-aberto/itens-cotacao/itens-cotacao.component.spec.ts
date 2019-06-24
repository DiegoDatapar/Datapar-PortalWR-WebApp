import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensCotacaoComponent } from './itens-cotacao.component';

describe('ItensCotacaoComponent', () => {
  let component: ItensCotacaoComponent;
  let fixture: ComponentFixture<ItensCotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensCotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
