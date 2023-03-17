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
  ReferenceArea,
} from 'recharts';
import CustomTooltip from '@/components/Chart/CustomTooltips';
import { IActivePayload, IChartProps } from '@/interface/props';
import ChartFilter from './ChartFilter';
import CustomDot from './CustomDot';
import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart';
import style from '@/components/Chart/style.module.css';
import useFilterData from '@/lib/hooks/useFilterData';
import { getFilteredData } from '@/lib/utils/chartHelper';

const Chart = ({ data, start, end }: IChartProps) => {
  const { curFilterData, toggleFilter } = useFilterData();
  const filteredData = getFilteredData(data, curFilterData);

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
              isAnimationActive={false}
              dot={<CustomDot />}
            />
            {filteredData.map((date) => (
              <ReferenceArea
                key={date}
                yAxisId="right"
                x1={date}
                x2={date}
                fill="#ffa8a8"
                fillOpacity={0.6}
              />
            ))}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
