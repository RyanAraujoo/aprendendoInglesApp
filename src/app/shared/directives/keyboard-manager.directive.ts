import { ContentChild, ContentChildren, Directive, HostListener, QueryList } from '@angular/core';
import { KeyboardItemManagerDirective } from './keyboardItem-manager.directive';

@Directive({
  selector: '[appKeyboardManager]'
})
export class KeyboardManagerDirective {
  @ContentChildren(KeyboardItemManagerDirective) public itensElements: QueryList<KeyboardItemManagerDirective> = new QueryList<KeyboardItemManagerDirective>

  @HostListener('keyup', ['$event'])
  public managerKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp': this.moveFocus(KeyboardDirection.RIGHT).focus()
        break
      case 'ArrowDown': this.moveFocus(KeyboardDirection.LEFT).focus()
        break
      case 'ArrowLeft': this.moveFocus(KeyboardDirection.LEFT).focus()
        break
      case 'ArrowRight': this.moveFocus(KeyboardDirection.RIGHT).focus()
        break
    }
  }

  moveFocus(direction: KeyboardDirection): KeyboardItemManagerDirective {
    let arrayOfItensElementsRef = this.itensElements.toArray()
    let getElementFocusedOfArrayItens = arrayOfItensElementsRef.findIndex(item => item.isFocused())
    let targetElementFocus = arrayOfItensElementsRef[getElementFocusedOfArrayItens + direction]
      if(targetElementFocus) {
        return targetElementFocus
      }

      return direction === KeyboardDirection.LEFT
          ? arrayOfItensElementsRef[arrayOfItensElementsRef.length - 1]
          : arrayOfItensElementsRef[0]
  }
}

enum KeyboardDirection {
  LEFT = -1,
  RIGHT = 1
}
