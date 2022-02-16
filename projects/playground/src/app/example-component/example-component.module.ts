import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponentComponent } from './example-component.component';
import { IDynamicModule } from '../dynamic-component/dynamic-module.token';
import { IDynamicComponentBase } from '../dynamic-component/dynamic-component.token';



@NgModule({
  declarations: [
    ExampleComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExampleComponentModule implements IDynamicModule {
  constructor(private cfResolver: ComponentFactoryResolver) {}
  
  public initModule = (): ComponentFactory<IDynamicComponentBase> => {
    return this.cfResolver.resolveComponentFactory(ExampleComponentComponent);
  };
}
