import { Component,OnInit } from '@angular/core';
import { Coracao } from 'app/Shared/coracao.model';

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
        
        rodada: number = 0
        rodadaFrase: Frases | undefined
        rodadasfeitas: Number[] | undefined

        progresso: number = 0;

        coracoes:Coracao[] = [
          new Coracao(true), new Coracao(true), new Coracao(true)
        ]

  constructor() { 
    this.reiniciarRodada()
  }

  pegarResposta(x: any): void {
   this.getResposta = (<HTMLInputElement>x.target).value
  }

  resposta (): void {

   // if (this.getResposta == this.rodadaFrase.fraseEng) { }
   if (this.getResposta == this.rodadaFrase.frasePTBR) { 
    //console.log(this.getResposta)
    //console.log(this.rodadaFrase.frasePTBR)
    this.reiniciarRodada()
    this.progresso += ( 100 / this.frases.length)
    
   } else {
      for ( let coracao of this.coracoes) {
          if ( coracao.cheio == true) {
              coracao.cheio = false
              break
          }
      }  
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
