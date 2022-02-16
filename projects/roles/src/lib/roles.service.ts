import { Inject, Injectable } from '@angular/core';
import { USER_ROLES } from './roles.module';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    @Inject(USER_ROLES) private roles: string[]
  ) {}

  public userHasRoles(rolesToCheck: string[]): boolean {
    if (!this.roles?.length) return false;

    if (!rolesToCheck?.length) return false;

    let validRoles = false;
    for (let i = 0; i < this.roles.length; i++) {
      const role = this.roles[i];
      if (rolesToCheck.includes(role)) {
        validRoles = true;
        break;
      };
    }

    return validRoles;
  }


}
