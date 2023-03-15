import { IChart } from '@/interface/chartData';
import useFilterData from '@/lib/hooks/useFilterData';
import { uniqueId } from '@/lib/utils/uniqueId';
import FilterBtn from '../FilterBtn/FilterBtn';
import style from './style.module.css';

interface IProps {
  data: IChart[];
}

const ChartFilter = ({ data }: IProps) => {
  const { resetFilter } = useFilterData();
  const buttons = uniqueId(data);

  const onClickInitFilter = () => {
    resetFilter();
  };

  return (
    <>
      <ul className={style.btnContainer}>
        <li>
          <button onClick={onClickInitFilter} className={style.initBtn}>
            필터 삭제
          </button>
        </li>
        {buttons.map((item, index) => (
          <li key={index}>
            <FilterBtn name={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ChartFilter;
