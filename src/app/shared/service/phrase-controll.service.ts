import { Injectable } from '@angular/core'
import { Phrase } from '../phrase.model'
import { PHRASES } from './../phrase-mock'

@Injectable({
  providedIn: 'root',
})
export class PhraseControllService {
  private phrases: Phrase[] = PHRASES;

  get _phrases(): Phrase[] {
    return this.phrases
  }

  set _phrases(valueOriginPhrases: Phrase[]) {
    this.phrases = valueOriginPhrases
  }

  pushPhrase(): Phrase {
    let phrase = this._phrases.find((val: any, index: number) => {
      console.log(val)
      if (this.renderPhrase() === index) {
        val.activate = true
        return val
      }
    });
    return phrase!
  }

  private renderPhrase(): number {
    let phraseIndex = this._phrases.findIndex((phraseChild) => {
      return phraseChild.activate === false;
    });
    return phraseIndex;
  }
}
