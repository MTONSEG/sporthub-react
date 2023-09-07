export const isActive = (el: boolean, selector: string): string =>
	el ? selector : '';

export const isChecked = (el: string, value: string, selector: string): string =>
	el === value ? selector : '';
