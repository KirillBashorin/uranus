import React, { FC } from 'react';
import Updates from '@/components/blocks/Updates';
import Narrative from '@/components/blocks/Narrative';
import Gameplay from '@/components/blocks/Gameplay';

const Home: FC = () => {
  return (
    <>
      <Gameplay />
      <Narrative />
      <Updates />
    </>
  );
};

export default Home;
