import { IChart } from '@/interface/chartData';

const transformData = (res: IChart[]) => {
  for (const key in res) {
    res[key].date = key;
  }
  return Object.values(res);
};

export default transformData;
