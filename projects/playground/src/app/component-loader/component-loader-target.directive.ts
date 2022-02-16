import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[loaderTarget]',
})
export class ComponentLoaderTarget {
  constructor(public viewContainerRef: ViewContainerRef) { }
}