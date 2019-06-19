import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacoesEmAbertoComponent } from './cotacoes-em-aberto.component';

describe('CotacoesEmAbertoComponent', () => {
  let component: CotacoesEmAbertoComponent;
  let fixture: ComponentFixture<CotacoesEmAbertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotacoesEmAbertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotacoesEmAbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
