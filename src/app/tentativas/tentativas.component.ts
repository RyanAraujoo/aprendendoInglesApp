import { Component, Input, OnChanges} from '@angular/core';

import { Coracao } from 'app/Shared/coracao.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnChanges {

  coracoes:Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  @Input() tentativas: number = 3

  constructor() {
    console.log(this.coracoes.length)
  }

  ngOnChanges () {
    console.log(this.tentativas)
  
      if (this.tentativas !== this.coracoes.length) {
          let indice = this.coracoes.length - this.tentativas - 1 // - 1 respeita a contagem do contexto "ARRAY" 
          // indice = 3 - 2 = 1 
          // indice = 3 - 1 = 2
          // indice = 3 - 0 = 3 
          this.coracoes[indice].cheio = false
      }
  }
}
