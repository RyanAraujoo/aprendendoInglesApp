import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html'
})
export class ProgressoComponent {
   @Input("progressobyprogresso") progresso: number = 0;
}
