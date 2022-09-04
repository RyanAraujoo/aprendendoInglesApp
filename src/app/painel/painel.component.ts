import { Component,EventEmitter,Output} from '@angular/core';  

import { Frases } from 'app/Shared/frases.model'; 
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html'
})

export class PainelComponent {
        frases:Frases[] = FRASES
        getResposta: String | undefined 
        instrucao: String = "Traduza a Frase:"
        
        random: number = 0
        randomFeitos: Array<number> = []
        rodadaFrase: Frases | undefined
        acertos: number = 0
        //-------------------------------------------
        progresso: number = 0;
        // --------------------------
        tentativas: number = 3

        @Output() finalizandoJogo: EventEmitter<String> = new EventEmitter()

  constructor() { 
    this.reiniciarRodada()
  }

  pegarResposta(x: any): void {
   this.getResposta = (<HTMLInputElement>x.target).value
  }

  resposta (): void {

   if (this.getResposta == this.rodadaFrase.frasePTBR) { 
    this.acertos ++

    if (this.acertos == 4) {
      this.finalizandoJogo.emit('vitoria')
    }
    
    this.reiniciarRodada()
    this.progresso += ( 100 / this.frases.length)
    
   } else {
    this.tentativas--

    if (this.tentativas === -1) {
      this.finalizandoJogo.emit('derrota')
    }
   }
   
  }

   reiniciarRodada(): void {
    this.random = Math.floor(this.frases.length * Math.random());
    this.verificarRepeticao()
    this.rodadaFrase = this.frases[this.random]
    this.getResposta = ''
   }

   verificarRepeticao(): void {
      for (let random of this.randomFeitos) {
        if (random == this.random) {
          this.random = Math.floor(this.frases.length * Math.random())
          break
        }
      }
    this.randomFeitos.push(this.random)
   }
  } 


