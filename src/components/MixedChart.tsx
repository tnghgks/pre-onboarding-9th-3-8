import { IFlexsysChartData } from '@/interface/chart';
import {
  ComposedChart,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
  CartesianGrid,
  Area,
  Bar,
} from 'recharts';
import CustomTooltip from './CustomTooltip';

interface IProps {
  chartData: IFlexsysChartData[];
}

const MixedChart = ({ chartData }: IProps) => {
  return (
    <ComposedChart
      width={730}
      height={250}
      data={chartData}
      margin={{
        top: 30,
        left: 30,
        right: 30,
      }}
    >
      <XAxis dataKey="time" />
      <YAxis
        yAxisId="left"
        label={{ value: 'value_area', position: 'top', offset: 10 }}
      />
      <YAxis
        yAxisId="right"
        orientation="right"
        label={{ value: 'value_bar', position: 'top', offset: 10 }}
      />
      <Tooltip content={<CustomTooltip />} />
      <Legend verticalAlign="top" height={36} />
      <CartesianGrid stroke="#f5f5f5" />
      <Area
        dataKey="value_area"
        fill="#8884d8"
        stroke="#8884d8"
        yAxisId="left"
      />
      <Bar dataKey="value_bar" yAxisId="right" barSize={20} fill="#413ea0" />
    </ComposedChart>
  );
};
export default MixedChart;
