import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
      finalizandoAplicacao: Boolean = true
      resultadoAplicacao: String | undefined

    public game(x: String): void {
        this.finalizandoAplicacao = false
        this.resultadoAplicacao = x
    }

    public reiniciarAplicacao(): void {
        this.finalizandoAplicacao = true
        this.resultadoAplicacao = undefined
    }
}
