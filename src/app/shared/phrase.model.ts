export class Phrase {
    activate: boolean = false;
  constructor(public phraseEng: string, public phrasePTBR: string) {
    this.phraseEng = phraseEng;
    this.phrasePTBR = phrasePTBR;
  }
}
