// @flow

import { DateTime } from 'luxon';

export function formatFirstPlayed(val: Array<number> | number | null): string {
  if (Array.isArray(val)) {
    if (val.length === 1) {
      return DateTime.utc(val[0]).toFormat('yyyy');
    } else if (val.length === 2) {
      return DateTime.utc(val[0], val[1]).toFormat('MMM yyyy');
    } else if (val.length === 3) {
      return DateTime.utc(val[0], val[1], val[2]).toFormat('d MMM yyyy');
    } else {
      return '';
    }
  } else if (typeof val === 'number') {
    return DateTime.fromMillis(val, { zone: 'utc' }).toFormat('d MMM yyyy HH:mm');
  } else {
    return '';
  }
}
