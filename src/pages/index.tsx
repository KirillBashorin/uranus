import React, { FC } from 'react';
import Updates from '@/components/blocks/Updates';
import Narrative from '@/components/blocks/Narrative';
import Gameplay from '@/components/blocks/Gameplay';

const Home: FC = () => {
  return (
    <>
      <Gameplay id="gameplay" />
      <Narrative id="narrative" />
      <Updates id="updates" />
    </>
  );
};

export default Home;
