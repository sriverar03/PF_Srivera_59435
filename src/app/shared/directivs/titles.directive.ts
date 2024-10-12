import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitles]'
})
export class TitlesDirective {

  constructor(private elementRef: ElementRef,private renderer:Renderer2 ){
    //console.log('Se cambio a 20px',this,elementRef.nativeElement)
    this.renderer.setStyle(this.elementRef.nativeElement,'font-size','20px');
   }

}
