// @flow

import { DateTime } from 'luxon';

type Date = {|
  year: number,
  month?: number,
  day?: number
|};

type Timestamp = {| timestamp: number |};

export function formatFirstPlayed(val: Date | Timestamp | null): string {
  if (!val) {
    return '';
  } else if (val.timestamp) {
    return DateTime.fromMillis(val.timestamp, { zone: 'utc' }).toFormat('d MMM yyyy HH:mm');
  } else {
    if (val.day) {
      return DateTime.utc(val.year, val.month, val.day).toFormat('d MMM yyyy');
    } else if (val.month) {
      return DateTime.utc(val.year, val.month).toFormat('MMM yyyy');
    } else if (val.year) {
      return DateTime.utc(val.year).toFormat('yyyy');
    } else {
      return '';
    }
  }
}
