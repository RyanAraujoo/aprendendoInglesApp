import { Component, Input, OnChanges} from '@angular/core';
import { Coracao } from '../../shared/coracao.model'
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html'
})
export class TentativasComponent implements OnChanges {

  coracoes:Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  @Input() tentativas: number = 3

  ngOnChanges () {
      if (this.tentativas !== this.coracoes.length) {
          let indice = this.coracoes.length - this.tentativas - 1
          this.coracoes[indice].cheio = false
      }
  }
}
