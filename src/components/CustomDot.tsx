import { useSearchParams } from 'react-router-dom';
import { IChart } from '@/interface/chartData';

interface IProps {
  cx: number;
  cy: number;
  payload: IChart;
}

const CustomDot = (e: IProps | Record<string, never>) => {
  const [searchParams] = useSearchParams();

  return (
    <>
      {e.payload.id === searchParams.get('filter') ? (
        <circle
          cx={e.cx}
          cy={e.cy}
          r={3}
          stroke="black"
          strokeWidth={2}
          fill="#82ca9d"
        />
      ) : null}
    </>
  );
};

export default CustomDot;
