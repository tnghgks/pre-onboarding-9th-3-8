import { IChartFilterProps } from '@/interface/props';
import useFilterParams from '@/lib/hooks/useFilterParams';
import { uniqueId } from '@/lib/utils/uniqueId';
import FilterBtn from '../FilterBtn';
import style from './style.module.css';

const ChartFilter = ({ data }: IChartFilterProps) => {
  const { resetFilter } = useFilterParams('filter');
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
