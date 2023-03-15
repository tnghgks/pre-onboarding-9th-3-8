import Chart from '@/components/Chart';
import useChart from '@/lib/hooks/useChart';

const Home = () => {
  const { charts, start, end } = useChart();

  return (
    <div className="outer">
      <Chart data={charts} start={start} end={end} />
    </div>
  );
};

export default Home;
