import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

Date.propTypes = {
  dateString: PropTypes.string.isRequired,
};

export default Date;
