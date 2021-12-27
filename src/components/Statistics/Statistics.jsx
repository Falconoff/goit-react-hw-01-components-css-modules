import PropTypes from 'prop-types';
import StatItem from './StatItem/StatItem';
import css from './Statistics.module.scss';

export default function Statistics({ title, data }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {data.map(({ label, percentage, id }) => (
          <StatItem label={label} percentage={percentage} key={id} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
