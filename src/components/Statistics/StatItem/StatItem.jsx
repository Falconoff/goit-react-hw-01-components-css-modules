import PropTypes from 'prop-types';
import css from './StatItem.module.scss';

export default function StatItem({ label, percentage }) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <li
      className={css.item}
      style={{
        backgroundColor:
          'rgb(' +
          getRandomInt(0, 200) +
          ', ' +
          getRandomInt(0, 200) +
          ', ' +
          getRandomInt(0, 200) +
          ')',
      }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
