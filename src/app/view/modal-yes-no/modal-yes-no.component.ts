import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Phrase } from 'src/app/shared/phrase.model';

@Component({
  selector: 'app-modal-yes-no',
  templateUrl: './modal-yes-no.component.html',
  styleUrls: ['./modal-yes-no.component.scss'],
})
export class ModalYesNoComponent implements OnInit {
  @Input() phrase?: Phrase;
  originPhrase?: string = '';
 @Input() translationPhrase: string = '';
 @Output() confirm: EventEmitter<any> = new EventEmitter<any>();

 ngOnInit(): void {
    this.originPhrase = this.phrase?.phraseEng
 }

  confirmPhraseTranslation() {
    this.confirm.emit()
  }
}
