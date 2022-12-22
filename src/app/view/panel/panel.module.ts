import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { ProgressComponent } from './progress/progress.component';
import { AttemptsComponent } from './attempts/attempts.component';
import { ModalYesNoComponent } from '../modal-yes-no/modal-yes-no.component';
import { KeyboardManagerDirective } from 'src/app/shared/directives/keyboard-manager.directive';
import { KeyboardItemManagerDirective } from 'src/app/shared/directives/keyboardItem-manager.directive';



@NgModule({
    declarations: [PanelComponent, ProgressComponent, AttemptsComponent, ModalYesNoComponent, KeyboardManagerDirective, KeyboardItemManagerDirective],
    exports: [PanelComponent, ProgressComponent, AttemptsComponent],
    imports: [
    CommonModule,
    ]
})
export class PanelModule { }
