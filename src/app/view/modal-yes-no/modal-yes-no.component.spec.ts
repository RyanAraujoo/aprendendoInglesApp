import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Phrase } from 'src/app/shared/phrase.model';

import { ModalYesNoComponent } from './modal-yes-no.component';

describe('ModalYesNoComponent', () => {
  let component: ModalYesNoComponent;
  let fixture: ComponentFixture<ModalYesNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalYesNoComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ModalYesNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should check se a origin phrase were instance', () => {
    const phrase: Phrase = { phraseEng: 'I liked to Londres!', phrasePTBR: 'Eu gostei de Londres!', activate: true }
    component.phrase = phrase

    component.ngOnInit()
    expect(component.originPhrase).toBeTruthy()
  })

  fit('should check if in pharse is correct', () => {
    const spyConfirmPhraseTranslatione = spyOn(component.confirm, "emit").and.callThrough()
    component.confirmPhraseTranslation()
    expect(spyConfirmPhraseTranslatione).toHaveBeenCalledTimes(1)
  })
});
