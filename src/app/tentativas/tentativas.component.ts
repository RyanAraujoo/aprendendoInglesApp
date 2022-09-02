import { Component, Input, OnInit} from '@angular/core';

import { Coracao } from 'app/Shared/coracao.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
  // CoracaoVazio: String = "../../assets/coracao_vazio.png"
  // CoracaoCheio: String = "../../assets/coracao_cheio.png"

 @Input('coracoesTentativas') coracoes:Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() { 
    console.log(this.coracoes[1])
  }

  ngOnInit() {
  }

}
