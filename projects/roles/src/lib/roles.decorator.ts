import { RolesModule, USER_ROLES } from "./roles.module"

export function Roles() {
    const importWarning = `Role Module not found.  You must import it into your application.`;

    const get = () => {
        if (RolesModule === undefined || !('injector' in RolesModule)) {
            console.error(importWarning);
            return null; 
        }

        return RolesModule.injector.get(USER_ROLES);
    }

    const set = () => {
        if (RolesModule === undefined || !('injector' in RolesModule)) {
            console.error(importWarning);
            return null; 
        }

        return RolesModule.injector.get(USER_ROLES);
    }

    return function(target: object, key: string | symbol) {
        Object.defineProperty(target, key, {
            configurable: false,
            enumerable: true,
            get,
            set
        });
    }
}