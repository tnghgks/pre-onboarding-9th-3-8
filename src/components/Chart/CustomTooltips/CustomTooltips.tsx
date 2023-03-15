import { TooltipProps } from 'recharts';
import styles from '@/components/Chart/CustomTooltips/style.module.css';

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>): JSX.Element | null => {
  if (active && payload && payload.length) {
    const [bar, area] = payload;
    return (
      <div className={styles.tooltip}>
        <p className="title">{`${bar.payload.id}`}</p>
        <div>
          <p>
            {`${bar.dataKey} : `}
            <span className="bar_value">{`${bar.value}`}</span>
          </p>
          <p>
            {`${area.dataKey} : `}
            <span className="area_value">{`${area.value}`}</span>
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
