import MixedChart from '@/components/MixedChart';
import { useEffect, useState } from 'react';
import { IFlexsysChartData } from '@/interface/chart';
import chartApi from '@/api/chartApi';

const Home = () => {
  const [chartData, setChartData] = useState<IFlexsysChartData[]>([]);

  useEffect(() => {
    (async () => {
      const response = await chartApi.getChartData();

      setChartData(response);
    })();
  }, []);

  return <MixedChart chartData={chartData} />;
};
export default Home;
