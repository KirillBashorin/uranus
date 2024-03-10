'use client';
import React, { FC, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import Wrapper from '@/components/layout/Wrapper';
import Title from '@/components/ui/Title';

import styles from './Narrative.module.css';

const accordionItems = [
  {
    title: 'What is URANUS?',
    text: `The origins of URANUS are shrouded in mystery, with no
    definitive answer. Legends whisper of a powerful mage who
    ventured into the Cosmos Coliseum, becoming the first to
    establish its foundations. This mage supposedly clashed with a
    hero from another realm, etching their names in history. The
    path to this cosmic arena is said to lie through a wormhole
    concealed within the core of planet Uranus in our solar
    system. Perhaps this is why the mage chose such a name - a
    testament to the pivotal role the planet played in their
    journey.`,
  },
  {
    title: 'Who are the mage-gladiators?',
    text: `The origins of URANUS are shrouded in mystery, with no
    definitive answer. Legends whisper of a powerful mage who
    ventured into the Cosmos Coliseum, becoming the first to
    establish its foundations. This mage supposedly clashed with a
    hero from another realm.`,
  },
  {
    title: 'What role do I play in this story?',
    text: `The origins of URANUS are shrouded in mystery, with no
    definitive answer. Legends whisper of a powerful mage who
    ventured into the Cosmos Coliseum, becoming the first to
    establish its foundations. This mage supposedly clashed with a
    hero from another realm, etching their names in history. The
    path to this cosmic arena is said to lie through a wormhole
    concealed within the core of planet Uranus in our solar
    system..`,
  },
  {
    title: 'Why URANUS?',
    text: `The origins of URANUS are shrouded in mystery, with no
    definitive answer. Legends whisper of a powerful mage who
    ventured into the Cosmos Coliseum, becoming the first to
    establish its foundations.`,
  },
];

const Narrative: FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const activeItem = useRef<HTMLDivElement | null>(null);
  const accordion = useRef<HTMLUListElement | null>(null);
  const [activeItemHeight, setActiveItemHeight] = useState('0px');

  useEffect(() => {
    const height = activeItem.current?.offsetHeight;

    if (activeItem.current) {
      setActiveItemHeight(height + 'px');
    }
  }, [activeItemIndex]);

  return (
    <section className={styles.root}>
      <Wrapper>
        <div className={styles.inner}>
          <Title className={styles.title}>Narrative</Title>
          <p className={styles.subtitle}>
            Magus Answers Your
            <br /> Questions about URANUS
          </p>
          <div className={styles.mage}>
            <Image
              className={styles.mageImage}
              src={'mage.png'}
              width="267"
              height="280"
              alt="Magnus"
            />
          </div>
          <ul className={styles.accordion} ref={accordion}>
            {accordionItems &&
              accordionItems.length &&
              accordionItems.map((item, index) => (
                <li
                  className={clsx(
                    styles.accordionItem,
                    index === activeItemIndex && styles.opened
                  )}
                  key={item.title}
                >
                  <button
                    className={styles.accordionButton}
                    type="button"
                    onClick={() => setActiveItemIndex(index)}
                  >
                    {item.title}
                  </button>
                  <div
                    className={styles.accordionContentWrapper}
                    style={{
                      height: activeItemIndex === index ? activeItemHeight : 0,
                    }}
                  >
                    {activeItemIndex === index && (
                      <div className={styles.accordionContent} ref={activeItem}>
                        <div>{item.text}</div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default Narrative;
