export type Macro = {
	key: string;
	callable: Function;
};

export abstract class HasMacros {
	protected macros: Array<Macro> = [];

	macro<T = any>(key: string, callable: (model: this) => T) {
		const macro = this.macros.find((macro) => macro.key === key);
		if (macro) {
			throw new Error(`${key} is already registered.`);
		}
		this.macros.push({
			key,
			callable,
		});
	}

	call<T>(key: string, ...parameters: any): T {
		const macro = this.macros.find((macro) => macro.key === key);
		if (!macro) {
			throw new Error(`${key} is not a registered macro.`);
		}

		return macro.callable.bind(this)(...parameters);
	}
}
