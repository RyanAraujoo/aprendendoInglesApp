import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
      finalizandoAplicacao: Boolean = true
      resultadoAplicacao: String | undefined

    public game(x: String): void {
        console.log(x)
        this.finalizandoAplicacao = false
        this.resultadoAplicacao = x
    }

    public reiniciarAplicacao(): void {
        this.finalizandoAplicacao = true
        this.resultadoAplicacao = undefined
    }
}
