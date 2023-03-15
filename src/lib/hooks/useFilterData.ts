import { useSearchParams } from 'react-router-dom';

const useFilterData = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const curFilterData = searchParams.get('filter')?.split(',') || [];

  const toggleFilter = (id: string) => {
    const isExist = curFilterData.includes(id);

    if (isExist) {
      const removedList = curFilterData.filter((item) => item !== id);
      setSearchParams(`filter=${encodeURIComponent(removedList.join(','))}`);
    } else {
      curFilterData.push(id);
      setSearchParams(`filter=${encodeURIComponent(curFilterData.join(','))}`);
    }
  };

  const resetFilter = () => {
    setSearchParams('');
  };

  return { curFilterData, toggleFilter, resetFilter };
};

export default useFilterData;
