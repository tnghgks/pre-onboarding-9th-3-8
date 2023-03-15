import Chart from '@/components/Chart/Chart';
import useChart from '@/lib/hooks/useChart';
import styles from '@/pages/Home/style.module.css';

const Home = () => {
  const { charts, start, end } = useChart();

  return (
    <main className={styles.outer}>
      <Chart data={charts} start={start} end={end} />
    </main>
  );
};

export default Home;
