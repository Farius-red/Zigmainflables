import { TestBed } from '@angular/core/testing';

import { UsuariosServiceZigma } from './usuarios.zigma.service';

describe('UsuariosService', () => {
  let service: UsuariosServiceZigma;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosServiceZigma);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
