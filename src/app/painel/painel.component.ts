import { Component,EventEmitter,OnInit, Output} from '@angular/core';  

import { Frases } from 'app/Shared/frases.model'; 
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{
        frases:Frases[] = FRASES
        getResposta: String | undefined 
        instrucao: String = "Traduza a Frase:"
        // ------------------------------------
        rodada: number = 0
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

   // if (this.getResposta == this.rodadaFrase.fraseEng) { }
   if (this.getResposta == this.rodadaFrase.frasePTBR) { 
    this.acertos ++
    //console.log(this.getResposta)
    //console.log(this.rodadaFrase.frasePTBR)
    if (this.acertos > 3 && this.acertos < 5) {
      this.finalizandoJogo.emit('vitoria')
    }
    
    console.log(this.acertos)
    this.reiniciarRodada()
    this.progresso += ( 100 / this.frases.length)

    
    
   } else {
    this.tentativas--

    if (this.tentativas === -1) {
      this.finalizandoJogo.emit('derrota')
    }
      /* for ( let coracao of this.coracoes) {
          if ( coracao.cheio == true) {
              coracao.cheio = false
              break
          }
      }  */ 

   }
   
  }

   reiniciarRodada(): void {
    this.rodada = Math.floor(3* Math.random());
    this.rodadaFrase = this.frases[this.rodada]
    this.getResposta = ''
   }

   ganharJogo(): void {
    if (this.progresso == 100) return ;
   }
        
  
  ngOnInit() {}

  }
