import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouvement]'
})
export class MouvementDirective {
  @Input('appMouvement') couleur = '';
  constructor(private elt: ElementRef) {

  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.changerCouleur(this.couleur);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.changerCouleur('white');
  }
  changerCouleur(couleur: string) {
    this.elt.nativeElement.style.backgroundColor = couleur;
  }
}
