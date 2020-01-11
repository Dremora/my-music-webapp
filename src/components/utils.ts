export const formatInteger = (value: number | null) => (value && value.toString()) || '';
export const parseInteger = (value: string) => (value ? parseInt(value, 10) || null : null);
export const parseOptionalString = (value: string): string | null => (value === '' ? null : value);
