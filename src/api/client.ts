import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const request = async (url: string) => {
  const response = await axios(`${BASE_URL}${url}`);

  if (response.status === 200) {
    return response.data;
  }

  throw new Error('데이터를 가지고 오지 못했습니다.');
};
