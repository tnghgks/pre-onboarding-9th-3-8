import { getData } from '@/api/localData';
import { API_URL } from '@/constants/url';
import { useEffect, useState } from 'react';

import { IGraph } from '@/interface/data';

const Home = () => {
  const [graphData, setGraphData] = useState<IGraph[]>([]);

  useEffect(() => {
    getData(API_URL).then(setGraphData).catch(console.error);
  }, []);
  return <div>{graphData.length}</div>;
};

export default Home;
