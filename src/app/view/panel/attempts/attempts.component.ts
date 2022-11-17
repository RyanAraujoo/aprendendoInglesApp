import { Component, Input, OnChanges } from '@angular/core'
import { Heart } from 'src/app/shared/heart.model'

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.scss'],
})
export class AttemptsComponent implements OnChanges {
  @Input('attemptsInput') attempts: number = 3

  hearts: Heart[] = [new Heart(true), new Heart(true), new Heart(true)]

  ngOnChanges() {
    if (this.attempts !== this.hearts.length) {
      let index = this.hearts.length - this.attempts - 1
      this.hearts[index].full = false
    }
  }
}
