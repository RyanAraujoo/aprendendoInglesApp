import { Component, OnInit } from '@angular/core';

import { Frases } from 'app/Shared/frases.model'; 
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
        frases:Frases[] = FRASES
        getResposta: String | undefined 
        instrucao: String = "Traduza a Frase:"
  constructor() { }

  pegarResposta(x: any): void {
   this.getResposta = (<HTMLInputElement>x.target).value
  }

  resposta (): String {
    console.log(this.getResposta)
    return this.getResposta == this.frases[2].fraseEng ? "Venci crlh" : "ops"
  }


  ngOnInit() {
  }

}
