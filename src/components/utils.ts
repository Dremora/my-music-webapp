export const formatInteger = dateComponent => (dateComponent && dateComponent.toString()) || '';
export const parseInteger = dateComponent => (dateComponent ? parseInt(dateComponent, 10) || null : null);
