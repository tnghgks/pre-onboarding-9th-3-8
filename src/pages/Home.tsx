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
import { generateStartAndEndDate } from '@/lib/utils/generateDate';
import '@/lib/utils/main.css';

const Home = () => {
  const [graphData, setGraphData] = useState<IGraph[]>([]);
  const { start, end } = generateStartAndEndDate(graphData);

  useEffect(() => {
    getData(API_URL).then(setGraphData).catch(console.error);
  }, []);

  return (
    <div className="outer">
      <h1>{`${start} ~ ${end}`}</h1>
      <div className="inner">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={graphData}
            margin={{
              top: 40,
              right: 30,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              yAxisId="left"
              label={{ value: 'value_bar', position: 'top', offset: 20 }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 150]}
              label={{ value: 'value_area', position: 'top', offset: 20 }}
            />
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="value_bar"
              fill="#868e96"
              barSize={20}
            />
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
    </div>
  );
};

export default Home;
