import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Phrase } from 'src/app/shared/phrase.model';
import { PhraseControllService } from 'src/app/shared/service/phrase-controll.service';
import { PanelComponent } from './panel.component';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  let service: PhraseControllService;

  const RESPONSE = { phraseEng: 'I liked to Londres!', phrasePTBR: 'Eu gostei de Londres!', activate: false }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhraseControllService);
    fixture.detectChanges();
  });

  fit('should create the app', () => {
    expect(component).toBeTruthy()
  });

  fit('should find value pharse when save in rodadaPharse variable ', () => {
       spyOn(service, "pushPhrase").and.returnValue(
         { phraseEng: 'I liked to Londres!', phrasePTBR: 'Eu gostei de Londres!', activate: true }
        )
        component.ngOnInit()
        const rodadaPharseVariable = component.rodadaPhrase?.activate

      expect(rodadaPharseVariable).toBeTrue()
  })

  fit('should issue event in finishGmae variable when hits variable were equal four number', fakeAsync(() => {
     const spyServiceRestartGame = spyOn(service, "restartGame").and.callThrough()
     const spyComponentFinishGame = spyOn(component.finishGame, "emit").and.callThrough()

     component.hits = 4
     component.finishGameValid()

     tick(400)

      expect(component.hits).toEqual(4)
      expect(spyServiceRestartGame).toHaveBeenCalledTimes(1)
      expect(spyComponentFinishGame).toHaveBeenCalledWith('green')
  }))

  fit('should issue event in finishGmae variable when attempts variable were equal negative one number', () => {

    const spyServiceRestartGame = spyOn(service, "restartGame").and.callThrough()
     const spyComponentFinishGame = spyOn(component.finishGame, "emit").and.callThrough()

     component.attempts = -1
     component.finishGameValid()
     expect(component.attempts).toEqual(-1)
     expect(spyServiceRestartGame).toHaveBeenCalledTimes(1)
     expect(spyComponentFinishGame).toHaveBeenCalledWith('red')
})

  fit('should update getResponse variable with valueHtmlElement when is called' , () => {

    const obj = {
      target: { value: 'I am Ryan'}
    }
      component.getResponseMethod(obj)

      const getResponseVariable = component.getResponse

      expect(getResponseVariable).toEqual('I am Ryan')
  })

  fit('should check if phrase is valid when called',() => {
    const obj = {
      target: { value: 'Eu gostei de Londres!'}
    }

    component.getResponseMethod(obj)
    const phrase: Phrase = { phraseEng: 'I liked to Londres!', phrasePTBR: 'Eu gostei de Londres!', activate: false }
    const getResponseVariable = component.getResponse
      expect(getResponseVariable).toEqual(phrase.phrasePTBR)
  })

  fit('should check game for to see the state in application when called', () => {
    let spynCalledMethod_getResponseIsValidinPhrase = spyOn(component, 'getResponseIsValidinPhrase').and.callThrough()
    let spynCalledMethod_finishGameValid = spyOn(component, 'finishGameValid').and.callThrough()

    component.CheckGame()

    expect(spynCalledMethod_getResponseIsValidinPhrase).toHaveBeenCalledTimes(1)
    expect(spynCalledMethod_finishGameValid).toHaveBeenCalledTimes(1)
  })
})

