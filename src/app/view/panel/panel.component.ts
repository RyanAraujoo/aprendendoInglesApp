import { Component, EventEmitter, Output } from '@angular/core'
import { Phrase } from 'src/app/shared/phrase.model'
import { PhraseControllService } from './../../shared/service/phrase-controll.service'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  phrases: Phrase[] = []
  getResponse?: string
  rodadaPhrase?: Phrase
  hits: number = 0
  progress: number = 0
  attempts: number = 3

  constructor(private phraseControllService: PhraseControllService) {}
  @Output() finishGame: EventEmitter<string> = new EventEmitter<string>()

  getResponseMethod(x: any): void {
    this.getResponse = (<HTMLInputElement>x.target).value;
  }

  CheckGame(): void {
    this.getResponseIsValidinPhrase()
    this.finishGameValid()
  }
  getResponseIsValidinPhrase() {
    if (this.getResponse === this.rodadaPhrase?.phrasePTBR) {
      this.progress += 25
      this.hits++
      // this.phraseControllService.restartPhrases()
    } else {
      this.attempts--
    }
  }

  finishGameValid() {
    if (this.hits === 4) {
      setTimeout(() => {
        this.finishGame.emit('green')
      }, 800);
    } else if (this.attempts === -1) {
      this.finishGame.emit('red')
    }
  }
}
