export class HasMacros {
    constructor() {
        this.macros = [];
    }
    macro(key, callable) {
        const macro = this.macros.find((macro) => macro.key === key);
        if (macro) {
            throw new Error(`${key} is already registered.`);
        }
        this.macros.push({
            key,
            callable,
        });
    }
    call(key, ...parameters) {
        const macro = this.macros.find((macro) => macro.key === key);
        if (!macro) {
            throw new Error(`${key} is not a registered macro.`);
        }
        return macro.callable(...parameters);
    }
}
