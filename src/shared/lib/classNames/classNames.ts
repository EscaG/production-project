type Mods = Record<string, boolean | string>;

const obj: Mods = {};


export function classNames(cls: string, mods: Mods = {}, additioanal: string[] = []): string {
	return [
		cls,
		...additioanal.filter(Boolean),
		...Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className, value]) => className),
	]
		.join(' ');
}

