import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html'
})
export class ProgressoComponent implements OnChanges {
   @Input("progressobyprogresso") progresso: number = 0;

   ngOnChanges(): void {
        console.log(this.progresso)
  }
}
