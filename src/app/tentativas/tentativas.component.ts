import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
  CoracaoVazio: String = "../../assets/coracao_vazio.png"
  CoracaoCheio: String = "../../assets/coracao_cheio.png"
  constructor() { }

  ngOnInit() {
  }

}
