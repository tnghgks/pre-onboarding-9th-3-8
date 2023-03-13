import { useEffect, useState } from 'react';
import { getData } from '@/api/localData';
import { API_URL } from '@/constants/url';
import { IGraph } from '@/interface/data';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';

const Home = () => {
  const [graphData, setGraphData] = useState<IGraph[]>([]);

  useEffect(() => {
    getData(API_URL).then(setGraphData).catch(console.error);
  }, []);

  return (
    <div
      style={{
        width: '90%',
        height: '80vh',
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={900}
          height={700}
          data={graphData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" domain={[0, 150]} />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="value_bar" fill="#868e96" barSize={20} />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="value_area"
            stroke="#ff8787"
            fill="#ffa8a8"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Home;
