import { useEffect, useState } from 'react';
import { getData } from '@/api/chartData';
import { API_URL } from '@/constants/url';
import { IChart } from '@/interface/chartData';

import { generateStartAndEndDate } from '@/lib/utils/generateDate';
import '@/lib/utils/main.css';
import Chart from '@/components/Chart';

const Home = () => {
  const [chartData, setChartData] = useState<IChart[]>([]);
  const { start, end } = generateStartAndEndDate(chartData);

  useEffect(() => {
    getData(API_URL).then(setChartData).catch(console.error);
  }, []);

  return (
    <div className="outer">
      <Chart data={chartData} start={start} end={end} />
    </div>
  );
};

export default Home;
