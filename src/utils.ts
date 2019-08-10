import { DateTime } from 'luxon';

interface Date {
  year: number,
  month?: number,
  day?: number
}

interface Timestamp {
  timestamp: number
}

type FirstPlayed = Date | Timestamp | null;

export function formatFirstPlayed(val: FirstPlayed): string {
  if (!val) {
    return '';
  } else if ('timestamp' in val) {
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
