import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { ProgressComponent } from './progress/progress.component';
import { AttemptsComponent } from './attempts/attempts.component';



@NgModule({
  declarations: [PanelComponent, ProgressComponent, AttemptsComponent],
  imports: [
    CommonModule
  ],
  exports: [PanelComponent, ProgressComponent, AttemptsComponent]
})
export class PanelModule { }
