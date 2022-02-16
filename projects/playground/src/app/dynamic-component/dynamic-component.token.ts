import { InjectionToken } from "@angular/core";

export interface IDynamicComponentBase {
    onLoadComponent: () => void
}

export const DYNAMIC_COMPONENT = new InjectionToken<IDynamicComponentBase>('DYNAMIC_COMPONENT');