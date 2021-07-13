export declare type Macro = {
    key: string;
    callable: Function;
};
export declare abstract class HasMacros {
    protected macros: Array<Macro>;
    macro<T = any>(key: string, callable: (model: this) => T): void;
    call<T>(key: string, ...parameters: any): T;
}
