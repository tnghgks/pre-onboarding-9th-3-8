import { IChart } from '@/interface/chartData';
import useFilterData from '@/lib/hooks/useFilterData';

interface IProps {
  cx: number;
  cy: number;
  payload: IChart;
}

const CustomDot = (e: IProps | Record<string, never>) => {
  const { curFilterData } = useFilterData();

  return (
    <>
      {curFilterData.includes(e.payload.id) ? (
        <circle cx={e.cx} cy={e.cy} r={3} fill="#ff7f00" />
      ) : null}
    </>
  );
};

export default CustomDot;
