import { ComponentFactory, Injector, NgModule, StaticProvider, ɵcreateInjector as createInjector } from "@angular/core";
import { IDynamicComponentBase } from "../dynamic-component/dynamic-component.token";


export function createDynamicComponentModule(
    moduleDef: any,
    injector: Injector,
    additionalProviders?: StaticProvider[]
): ComponentFactory<any> {
    try {
        const injectorRef = additionalProviders ? 
            createInjector(moduleDef, injector, additionalProviders) :
            createInjector(moduleDef, injector);

        const componentModule = injectorRef.get<any>(moduleDef)

        const compFactory = componentModule.initModule() as ComponentFactory<IDynamicComponentBase>;

        return compFactory;
    } catch (error: any) {
        console.error(error.message || `Unreadable error`);
        throw new Error(`Unable to load dynamic module.`);
    }
}