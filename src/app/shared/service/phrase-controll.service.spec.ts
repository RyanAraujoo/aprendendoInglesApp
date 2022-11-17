import { TestBed } from '@angular/core/testing';

import { PhraseControllService } from './phrase-controll.service';

describe('PhraseControllService', () => {
  let service: PhraseControllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhraseControllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
