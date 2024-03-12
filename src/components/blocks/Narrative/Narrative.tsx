'use client';
import React, { FC, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import Wrapper from '@/components/layout/Wrapper';
import Title from '@/components/ui/Title';

import styles from './Narrative.module.css';
import { difference } from 'next/dist/build/utils';

const accordionItems = [
  {
    title: 'What is URANUS?',
    text: "URANUS is more than just a place, it's a multilayered realm where the great Colosseum is. Beneath a shimmering celestial canopy lies an arena where a grand battle unfolds for the coveted Ether Crystals",
  },
  {
    title: 'What role do I play in this story?',
    text: "You are an owner of a magic school, training gladiators for the Cosmic Colosseum. You are a strategist, making calculated decisions in battle. And you are a gambler, placing high-stakes bets on your students' victories. You are the one who will conquer URANUS",
  },
  {
    title: 'Who are wizardiators?',
    text: 'Wizards-gladiators are skilled warriors from different realms, seeking for glory in the arena of the Colosseum. They hone their abilities in prestigious schools, mastering ancient spells and perfecting their combat prowess. In URANUS, they step into the arena to fight for glory, wealth, and of course, possession of the priceless Ether Crystals',
  },
  {
    title: 'Why URANUS?',
    text: 'Ah, the enigma of URANUS. Its origins are shrouded, lost to the swirling sands of time. Some whisper of a legendary mage, the first to breach the veil and lay the foundation of the Cosmic Colosseum.\n\nPerhaps the mage sought to honor the pivotal role the planet Uranus played in his journey. For it was within the core of Uranus in the solar system that the wormhole lay concealed, a first gateway to this cosmic arena',
  },
];

interface INarrativeProps {
  id?: string;
}

const Narrative: FC<INarrativeProps> = ({ id }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const activeItem = useRef<HTMLDivElement | null>(null);
  const accordion = useRef<HTMLUListElement | null>(null);
  const [activeItemHeight, setActiveItemHeight] = useState('0px');

  useEffect(() => {
    const currentItemHeight = activeItem.current?.offsetHeight;
    if (activeItem.current) {
      setActiveItemHeight(currentItemHeight + 'px');
    }
  }, [activeItemIndex]);

  const mageRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // setting timeout because dialog height have a transition duration 300ms;
    setTimeout(() => {
      const mage = mageRef.current;
      const dialogHeight = dialogRef.current?.offsetHeight;
      const mageHeight = mage?.offsetHeight;

      if (!(mageHeight && dialogHeight && mage)) {
        return;
      }

      if (mageHeight >= dialogHeight) {
        const difference = dialogHeight - mageHeight;
        mage.style.bottom = `${difference}px`;
      } else {
        mage.style.bottom = '0';
      }
    }, 310);
  }, [activeItemHeight]);

  return (
    <section className={styles.root} id={id}>
      <Wrapper>
        <div className={styles.inner}>
          <Title className={styles.title}>Narrative</Title>
          <p className={styles.subtitle}>
            Magus Answers Your
            <br /> Questions about URANUS
          </p>
          <div className={styles.dialog} ref={dialogRef}>
            <div className={styles.mage} ref={mageRef}>
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
                        height:
                          activeItemIndex === index ? activeItemHeight : 0,
                      }}
                    >
                      {activeItemIndex === index && (
                        <div
                          className={styles.accordionContent}
                          ref={activeItem}
                        >
                          <div>{item.text}</div>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Narrative;
