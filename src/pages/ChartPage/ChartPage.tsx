import Chart from '@/components/Chart/Chart';
import useChart from '@/lib/hooks/useChart';
import styles from '@/pages/ChartPage/style.module.css';

const ChartPage = () => {
  const { charts, start, end } = useChart();

  return (
    <main className={styles.outer}>
      <Chart data={charts} start={start} end={end} />
    </main>
  );
};

export default ChartPage;
