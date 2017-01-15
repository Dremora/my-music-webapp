import moment from 'moment';
import _ from 'lodash';

export default function formatFirstPlayed(val) {
  if (_.isArray(val)) {
    if (val.length === 1) {
      return moment.utc([ val[(0)] ]).format('YYYY');
    } else if (val.length === 2) {
      return moment.utc([ val[(0)], val[(1)] - 1 ]).format('MMM YYYY');
    } else if (val.length === 3) {
      return moment
        .utc([ val[(0)], val[(1)] - 1, val[(2)] ])
        .format('DD MMM YYYY');
    }
  } else if (val) {
    return moment.utc(val).format('DD MMM YYYY HH:mm');
  } else {
    return '';
  }
}
