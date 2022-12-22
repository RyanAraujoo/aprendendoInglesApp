import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appKeyboardItemManager]'
})
export class KeyboardItemManagerDirective {
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  focus () {
    this.elementRef.nativeElement.focus()
  }

  isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
