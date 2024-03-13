import React, { FC } from 'react';

import Hero from '@/components/blocks/Hero';
import Updates from '@/components/blocks/Updates';
import Narrative from '@/components/blocks/Narrative';
import Gameplay from '@/components/blocks/Gameplay';
import Layout from '@/components/layout/Layout';

const Home: FC = () => {
  return (
    <Layout>
      <Hero />
      <Gameplay id="gameplay" />
      <Narrative id="narrative" />
      <Updates id="updates" />
    </Layout>
  );
};

export default Home;
