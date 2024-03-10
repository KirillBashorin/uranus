import React, { FC } from 'react';
import Updates from '@/components/blocks/Updates';
import Narrative from '@/components/blocks/Narrative';

const Home: FC = () => {
  return (
    <>
      <Narrative />
      <Updates />
    </>
  );
};

export default Home;
