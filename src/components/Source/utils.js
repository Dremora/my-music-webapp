export const formatDiscs = discs => (discs ? discs.toString() : '');
export const parseDiscs = discs => (discs ? parseInt(discs, 10) || undefined : undefined);
