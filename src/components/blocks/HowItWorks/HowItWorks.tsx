import React, { FC } from 'react';
import { motion } from 'framer-motion';

import Wrapper from '@/components/layout/Wrapper';
import ZoomIn from '@/components/animations/ZoomIn';
import SlideIn from '@/components/animations/SlidIn';
import Title from '@/components/ui/Title';
import Text from '@/components/ui/Text';

import styles from './HowItWorks.module.css';

interface IHowItWorksProps {
  isAlreadyWrapped?: boolean;
}

const HowItWorks: FC<IHowItWorksProps> = ({ isAlreadyWrapped }) => {
  const getLayout = (content: React.ReactNode) => {
    if (!isAlreadyWrapped) {
      return <Wrapper>{content}</Wrapper>;
    }

    return <>{content}</>;
  };

  return (
    <section className={styles.root} id={'how-it-works'}>
      {getLayout(
        <div className={styles.inner}>
          <ZoomIn>
            <Title className={styles.title} as={'h2'}>
              How It Works
            </Title>
          </ZoomIn>
          <SlideIn>
            <Text className={styles.text}>
              Our entire game is built on smart contracts, ensuring transparency
              in gameplay and betting. These contracts manage gameplay and
              record interactions on an immutable ledger. Players access the
              game via a simple web interface, interacting with the blockchain
              using EVM-compatible wallets that integrate with Metamask
            </Text>
          </SlideIn>
        </div>
      )}
    </section>
  );
};

export default HowItWorks;
