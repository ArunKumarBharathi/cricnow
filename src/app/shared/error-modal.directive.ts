import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appErrorModal]'
})
export class ErrorModalDirective {

  constructor(public containerRef:ViewContainerRef ) { }

}
