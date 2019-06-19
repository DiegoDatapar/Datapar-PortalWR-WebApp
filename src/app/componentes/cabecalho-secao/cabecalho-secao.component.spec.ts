import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoSecaoComponent } from './cabecalho-secao.component';

describe('CabecalhoSecaoComponent', () => {
  let component: CabecalhoSecaoComponent;
  let fixture: ComponentFixture<CabecalhoSecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecalhoSecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoSecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
