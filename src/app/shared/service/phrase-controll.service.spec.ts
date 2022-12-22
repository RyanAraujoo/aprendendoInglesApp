import { TestBed } from '@angular/core/testing';
import { PHRASES } from '../phrase-mock';
import { Phrase } from '../phrase.model';

import { PhraseControllService } from './phrase-controll.service';

describe('PhraseControllService', () => {
  let service: PhraseControllService;

  const RESPONSE_PHRASES =
  [
    { phraseEng: 'I liked to Londres!', phrasePTBR: 'Eu gostei de Londres!', activate: false },
    { phraseEng: 'How Are You?', phrasePTBR: 'Como você está?', activate: false },
    { phraseEng: 'I am Ryan', phrasePTBR: 'Eu sou Ryan', activate: false },
    { phraseEng: 'Hi! My name is Sabrina!', phrasePTBR: 'Olá! Meu nome é Sabrina!', activate: false}
  ]

  class PhraseServiceMock extends PhraseControllService {
    override get _phrases(): Phrase[] {
        return RESPONSE_PHRASES
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {
        provide: PhraseControllService,
        useClass: PhraseServiceMock
      }
      ]
    });
    service = TestBed.inject(PhraseControllService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit(`should return an array in phrases when called`, () => {
    const getPhrasesMethod = service._phrases
    const responsePhrasesArrayVariable = RESPONSE_PHRASES
    expect(getPhrasesMethod).toEqual(responsePhrasesArrayVariable)
  })

  fit(`should return an array in phrases already selected impossible to called`, () => {
    const phrase: Phrase = { phraseEng: 'I liked to Londres!', phrasePTBR: 'Eu gostei de Londres!', activate: true }

    const spyPushPharse =  spyOn(service, 'pushPhrase').and.returnValue(phrase)

    expect(spyPushPharse).toBeDefined()
  })


});
