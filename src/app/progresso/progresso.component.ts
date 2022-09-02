import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {
  // @Output() progressoAumenta: Boolean | undefined
   @Input("progressobyprogresso") progresso: number = 0;
   
  constructor() { }

  ngOnInit() {
  }

}
