import { IChart } from '@/interface/chartData';
import { uniqueId } from '@/lib/utils/uniqueId';
import { MouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './style.module.css';

interface IProps {
  data: IChart[];
}

const ChartFilter = ({ data }: IProps) => {
  const buttons = uniqueId(data);
  const [, setSearchParams] = useSearchParams();

  const onClickFilter = (e: MouseEvent<HTMLButtonElement>) => {
    const Text = (e.target as HTMLLIElement).textContent;
    if (Text) {
      setSearchParams(`filter=${encodeURIComponent(Text)}`);
    }
  };

  const onClickInitFilter = () => {
    setSearchParams('');
  };

  return (
    <>
      <ul className={styles.BtnContainer}>
        <li>
          <button onClick={onClickInitFilter} className={styles.filterBtn}>
            필터 삭제
          </button>
        </li>
        {buttons.map((item, index) => (
          <li key={index}>
            <button onClick={onClickFilter} className={styles.filterBtn}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ChartFilter;
