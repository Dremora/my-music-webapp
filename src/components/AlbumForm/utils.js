export const formatYear = year => (year ? year.toString() : '');
export const parseYear = year => (year ? parseInt(year, 10) || undefined : undefined);
