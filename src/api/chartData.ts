import apiClient from '@/api';
import { IData } from '@/interface/chartData';

export const getData = async (url: string) => {
  try {
    const res = await apiClient(url);
    return Object.entries(res.data.response).map(([date, value]) => {
      const data = value as IData;
      return {
        date,
        id: data.id,
        value_area: data.value_area,
        value_bar: data.value_bar,
      };
    });
  } catch (e) {
    throw new Error('데이터가 없습니다.');
  }
};
