// @flow

import moment from 'moment';
import { List } from 'typed-immutable';

export default function formatFirstPlayed(val: List<number> | number | null): string {
  if (val instanceof List) {
    if (val.size === 1) {
      return moment.utc([val.get(0)]).format('YYYY');
    } else if (val.size === 2) {
      return moment.utc([val.get(0), val.get(1) - 1]).format('MMM YYYY');
    } else if (val.size === 3) {
      return moment.utc([val.get(0), val.get(1) - 1, val.get(2)]).format('DD MMM YYYY');
    } else {
      return '';
    }
  } else if (typeof val === 'number') {
    return moment.utc(val).format('DD MMM YYYY HH:mm');
  } else {
    return '';
  }
}
