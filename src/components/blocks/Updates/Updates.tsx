import React, { FC } from 'react';

import Wrapper from '@/components/layout/Wrapper';
import Title from '@/components/ui/Title';
import Text from '@/components/ui/Text';

import styles from './Updates.module.css';

interface IUpdatesProps {
  id?: string;
}

const Updates: FC<IUpdatesProps> = ({ id }) => {
  return (
    <section className={styles.root} id={id}>
      <Wrapper>
        <div className={styles.inner}>
          <Title className={styles.title}>Updates</Title>
          <Text className={styles.text}>
            Our developers are hard at work crafting the gameplay and graphics
            for URANUS. We&apos;re excited to share that we&apos;re making great
            progress!
          </Text>
          <Text className={styles.text}>
            Stay tuned for a sneak peek, follow us on X for the latest news
          </Text>
          <div></div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Updates;
