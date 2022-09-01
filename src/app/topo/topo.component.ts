import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  /* o selector pode ser instanciado no appComponent como:
          1- Classe --> selector: '.app-topo'
          2- Atributo --> selector: '[app-topo]'
          3- Elemento  --> selector: 'app-topo'
  */
  templateUrl: './topo.component.html',
  /* o template pode ser inline ou externo
          templateUrl: './topo.component.html',
          template: '<h1></h1>',
  */
  styleUrls: ['./topo.component.css']
  /* o style pode ser inline ou externo
            styleUrls: ['./topo.component.css'],
            style: ['. exemplo {background-color: black;}']
  */

})
export class TopoComponent implements OnInit {
    logo_title: String = "Aprendendo Inglês"
  constructor() { }

  ngOnInit() { // ciclo de vida angular 
  }

}
