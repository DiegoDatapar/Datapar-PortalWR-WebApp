import { TestBed } from '@angular/core/testing';

import { GrupoFormularioService } from './grupo-formulario.service';

describe('GrupoFormularioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrupoFormularioService = TestBed.get(GrupoFormularioService);
    expect(service).toBeTruthy();
  });
});
