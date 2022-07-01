import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMouvement]'
})
export class MouvementDirective {

  constructor(private elt: ElementRef) {
    elt.nativeElement.style.backgroundColor = 'red';
  }

}
