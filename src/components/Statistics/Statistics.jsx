import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>{title}</h2>)}
            
            <ul className={css.statlist}>
                {stats.map(({ id, label, percentage }) =>
                  (
                    <li
                        className={css.item}
                        key={id}
                        style={{
                            backgroundColor: '#' + RandomColor(),
                            width: `calc(100%${stats.length})`,
                        }}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                  )
                )}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
}

function RandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
};