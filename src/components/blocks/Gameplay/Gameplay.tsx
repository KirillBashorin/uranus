import React, { FC, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import 'swiper/css';

import Arrow from '/public/icons/arrow.svg';
import DTThunder from '/public/dt-thunder.png';
import Twirl from '/public/twirl.png';
import Vendetta from '/public/vendetta.png';

import Wrapper from '@/components/layout/Wrapper';
import Title from '@/components/ui/Title';
import Text from '@/components/ui/Text';

import styles from './Gameplay.module.css';

const gameplayItems = [
  {
    name: 'Double trouble thunder',
    image: DTThunder,
  },
  {
    name: 'Thunderstruck twirl',
    image: Vendetta,
  },
  {
    name: 'Volcanic vendetta',
    image: Twirl,
  },
  {
    name: 'Double trouble thunder 2',
    image: DTThunder,
  },
  {
    name: 'Thunderstruck twirl 2',
    image: Vendetta,
  },
  {
    name: 'Volcanic vendetta 2',
    image: Twirl,
  },
];

interface IGameplayProps {
  id?: string;
}

const Gameplay: FC<IGameplayProps> = ({ id }) => {
  const breakpoints = {
    720: {
      spaceBetween: 81,
    },
    1024: {
      spaceBetween: 67,
    },
  };

  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handlerNextButton = () => {
    swiperRef.current ? swiperRef.current.slideNext() : null;
  };
  const handlerPrevButton = () => {
    swiperRef.current ? swiperRef.current.slidePrev() : null;
  };

  return (
    <section className={styles.root} id={id}>
      <Wrapper>
        <div className={styles.inner}>
          <Title className={styles.title}>Gameplay</Title>
          <Text className={styles.text}>
            Gear up your NFT-wizardiator with spells from a pool of 80+ scrolls
            across 8 magic schools. Mix&apos;em up for synergy, pick your
            opponent, play with crypto bets, and add some bluffing for fun
          </Text>
          <Text className={styles.text}>
            Then, chill and watch your gladiator wreck your opponent with
            spells. If yours turns them to ashes first, pocket your
            opponent&apos;s bet
          </Text>
          <div className={styles.sliderContainer}>
            <Swiper
              breakpoints={breakpoints}
              className={styles.slider}
              initialSlide={1}
              spaceBetween={56}
              slidesPerView={3}
              centeredSlides={true}
              slideActiveClass={styles.slideActive}
              onSlideChange={handleSlideChange}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {gameplayItems &&
                gameplayItems.length &&
                gameplayItems.map((item, index) => (
                  <SwiperSlide
                    key={item.name}
                    className={
                      index === activeIndex
                        ? clsx(styles.slideActive, styles.slide)
                        : styles.slide
                    }
                  >
                    <div className={styles.item}>
                      <Image
                        className={styles.image}
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.pagination}>
              <button className={styles.nextButton} onClick={handlerPrevButton}>
                <Arrow className={styles.icon} />
              </button>
              <button className={styles.prevButton} onClick={handlerNextButton}>
                <Arrow className={styles.icon} />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Gameplay;
