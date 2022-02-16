import { AfterViewInit, Component, ComponentRef, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { ComponentLoaderTarget } from './component-loader-target.directive';
import { IDynamicComponentBase } from '../dynamic-component/dynamic-component.token';
import { createDynamicComponentModule } from '../util/component-module-loader';

@Component({
  selector: 'ng-pg-component-loader',
  templateUrl: './component-loader.component.html',
  styleUrls: ['./component-loader.component.scss']
})
export class ComponentLoaderComponent implements OnInit, AfterViewInit {

  @Input() public dynamicComponent!: IDynamicComponentBase;

  // Component Selectors
  @ViewChild(ComponentLoaderTarget, { static: true }) private loadTarget!: ComponentLoaderTarget;

  public componentInstance!: ComponentRef<IDynamicComponentBase> | null;

  constructor(private injector: Injector) { }

  ngOnInit(): void {
  }
  

  ngAfterViewInit(): void {
  }

  public async loadDynamicComponent(): Promise<void> {
    const { ExampleComponentModule } = await import('../example-component/example-component.module');
    const dynamicComponent = createDynamicComponentModule(ExampleComponentModule, this.injector);

    const viewContainerRef = this.loadTarget.viewContainerRef;

    // TODO: Update for NG13 -- ComponentFactory no longer needed
    const componentRef = viewContainerRef.createComponent<IDynamicComponentBase>(dynamicComponent as any);

    componentRef.instance.onLoadComponent();

    this.componentInstance = componentRef;

  }

  public destroyComponent(): void {
    if (this.componentInstance) this.componentInstance.destroy();
    this.componentInstance = null;
  }

}
