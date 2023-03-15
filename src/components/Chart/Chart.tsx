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
  Cell,
} from 'recharts';
import CustomTooltip from '@/components/Chart/CustomTooltips/CustomTooltips';
import { IChartProps } from '@/interface/props';
import ChartFilter from './ChartFilter/ChartFilter';
import CustomDot from './CustomDot/CustomDot';
import { IChart } from '@/interface/chartData';
import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart';
import style from '@/components/Chart/style.module.css';
import useFilterData from '@/lib/hooks/useFilterData';

interface IActivePayload {
  activePayload: {
    payload: IChart;
  }[];
}

const Chart = ({ data, start, end }: IChartProps) => {
  const { curFilterData, toggleFilter } = useFilterData();

  const onClick = ({ activePayload }: IActivePayload) => {
    const payload = activePayload[0].payload;

    if (payload.id) {
      toggleFilter(payload.id);
    }
  };

  return (
    <>
      <h1>{`${start} ~ ${end}`}</h1>
      <ChartFilter data={data} />
      <div className={style.inner}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 40,
              right: 30,
              left: 20,
            }}
            onClick={onClick as CategoricalChartFunc}
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
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ outline: 'none' }}
            />
            <Legend />
            <CustomDot />
            <Bar yAxisId="left" dataKey="value_bar" fill="#868e96" barSize={20}>
              {data.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={curFilterData.includes(entry.id) ? '#0765AB' : '#aaa'}
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="value_area"
              stroke="#ff8787"
              fill="#ffa8a8"
              isAnimationActive={false}
              dot={<CustomDot />}
            ></Area>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
