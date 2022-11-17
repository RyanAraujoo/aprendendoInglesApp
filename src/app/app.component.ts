import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
     application: boolean = true
     finishApplication?: boolean

    public resultApplication(eventChild: string): void {
      eventChild === 'green' ?  this.finishApplication = true :  this.finishApplication = false
      this.application = false
    }

    public restartApplication(): void {
        this.application = true
        this.finishApplication = undefined
    }
}
