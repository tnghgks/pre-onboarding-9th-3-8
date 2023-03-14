import { IFlexsysChartData } from '@/interface/chart';
import { request } from './client';

interface IChartData {
  response: {
    [key: string]: {
      id: string;
      time: string;
      value_area: number;
      value_bar: number;
    };
  };
}

const chartApi = {
  getChartData: async () => {
    const { response }: IChartData = await request('/mock/mockdata.json');

    for (const key in response) {
      response[key].time = key;
    }
    return Object.values<IFlexsysChartData>(response);
  },
};

export default chartApi;
