import { InjectionToken, Injector, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

export const USER_ROLES = new InjectionToken<string[]>('APPLICATION ROLES');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RolesModule {
  // Assign Injector for static ref
  static injector: Injector;

  // For Root Method
  static forRoot(roles: string[]) {
    return {
      ngModule: RolesModule,
      providers: [
        {
          provide: USER_ROLES,
          useValue: roles || []
        }
      ]
    }
  }
  constructor(injector: Injector, @Optional() @SkipSelf() parentModule?: RolesModule) {
    if (parentModule) {
      throw new Error('GreetingModule is already loaded. Must be imported in your root application module.  Usually this is your AppModule.');
    }
    RolesModule.injector = injector;
  }
}
