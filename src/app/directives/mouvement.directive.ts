import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouvement]'
})
export class MouvementDirective {

  constructor(private elt: ElementRef) {

  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.changerCouleur('pink');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.changerCouleur('white');
  }
  changerCouleur(couleur: string) {
    this.elt.nativeElement.style.backgroundColor = couleur;
  }
}
