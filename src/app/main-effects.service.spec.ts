import { TestBed, inject } from '@angular/core/testing';

import { MainEffects } from './main-effects.service';

describe('MainEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainEffects]
    });
  });

  it('should be created', inject([MainEffects], (service: MainEffects) => {
    expect(service).toBeTruthy();
  }));
});
