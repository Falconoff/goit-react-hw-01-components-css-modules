import PropTypes from 'prop-types';
import { getRandomColor } from '../../../helpers/makeRandomColor';
import css from './StatItem.module.scss';

export default function StatItem({ label, percentage }) {
  return (
    <li className={css.item} style={getRandomColor(0, 200)}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
