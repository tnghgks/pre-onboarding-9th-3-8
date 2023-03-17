import Chart from '@/components/Chart/Chart';
import { API_URL } from '@/constants/url';
import { IChart } from '@/interface/chartData';
import useFetch from '@/lib/hooks/useFetch';
import styles from '@/pages/ChartPage/style.module.css';
import transformData from '@/lib/utils/transformData';
import { generateStartAndEndDate } from '@/lib/utils/generateDate';

const ChartPage = () => {
  const [chartData, isLoading, isError] = useFetch<IChart[]>(
    [],
    API_URL,
    transformData,
  );
  const { startDate, endDate } = generateStartAndEndDate(chartData);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;
  return (
    <main className={styles.outer}>
      <Chart data={chartData} start={startDate} end={endDate} />
    </main>
  );
};

export default ChartPage;
