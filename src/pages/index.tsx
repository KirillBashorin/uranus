import React, { FC } from 'react';
import Hero from '@/components/blocks/Hero';
import Updates from '@/components/blocks/Updates';
import Narrative from '@/components/blocks/Narrative';
import Gameplay from '@/components/blocks/Gameplay';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Gameplay id="gameplay" />
      <Narrative id="narrative" />
      <Updates id="updates" />
    </>
  );
};

export default Home;
