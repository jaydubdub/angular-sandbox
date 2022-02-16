import { RolesModule } from "./roles.module"
import { RolesService } from "./roles.service";

export function RestrictRole(roles: string[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const rolesService: RolesService = RolesModule.injector.get(RolesService);
            if (rolesService.userHasRoles(roles)) {
                return original.apply(this, args);
            } else {
                console.error(`Method invoked by non-eligible user.`);
                return false;
            }
        }

        return descriptor;
    }
}