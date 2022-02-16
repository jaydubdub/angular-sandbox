import { ComponentFactory, InjectionToken } from "@angular/core";
import { IDynamicComponentBase } from "./dynamic-component.token";

export interface IDynamicModule {
    initModule: () => ComponentFactory<IDynamicComponentBase>
}

export const DYNAMIC_MODULE = new InjectionToken<IDynamicModule>('DYNAMIC MODULE');