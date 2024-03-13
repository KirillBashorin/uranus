'use client';
import React, { FC, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import clsx from 'clsx';

import ZoomIn from '@/components/animations/ZoomIn';
import SlideIn from '@/components/animations/SlidIn';
import Wrapper from '@/components/layout/Wrapper';
import HowItWorks from '@/components/blocks/HowItWorks';

import styles from './Hero.module.css';

const Hero: FC = () => {
  const [distanceDivider, seDistanceDivider] = useState(1);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const useParallax = (value: MotionValue, distance: number) => {
    return useTransform(value, [0, 1], [0, distance / distanceDivider]);
  };

  const loadAnimtaionDuration = 2;

  useEffect(() => {
    const updateDistanceDivider = () => {
      if (window.innerWidth < 720) {
        seDistanceDivider(4);
      } else {
        seDistanceDivider(1);
      }
    };

    updateDistanceDivider();
    window.addEventListener('resize', updateDistanceDivider);

    return () => window.removeEventListener('resize', updateDistanceDivider);
  }, []);

  return (
    <section className={styles.root} ref={targetRef}>
      <Wrapper>
        <div className={styles.inner}>
          <div>
            <Image
              className={styles.badge}
              width="120"
              height="54"
              src="/icons/soon.svg"
              alt="Coming soon"
            />
            <motion.div
              className={clsx(styles.motionDiv, styles.cloudLT)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { x: '-40%' },
                visible: { x: 0 },
              }}
            >
              <Image
                className={styles.image}
                width="143"
                height="76"
                src="/cloud-lt.png"
                alt="cloud"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.cloudLM1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { x: '-20%' },
                visible: { x: 0 },
              }}
            >
              <Image
                className={styles.image}
                width="177"
                height="46"
                src="/cloud-lm1.png"
                alt="cloud"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.cloudLM2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { x: '-20%' },
                visible: { x: 0 },
              }}
            >
              <Image
                className={styles.image}
                width="248"
                height="139"
                src="/cloud-lm2.png"
                alt="cloud"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.cloudLB)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { x: '-20%' },
                visible: { x: 0 },
              }}
            >
              <Image
                className={styles.image}
                width="84"
                height="62"
                src="/cloud-lb.png"
                alt="cloud"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.cloudRT)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { x: '40%' },
                visible: { x: 0 },
              }}
            >
              <Image
                className={styles.image}
                width="130"
                height="39"
                src="/cloud-rt.png"
                alt="cloud"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.cloudRM)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { x: '20%' },
                visible: { x: 0 },
              }}
            >
              <Image
                className={styles.image}
                width="163"
                height="91"
                src="/cloud-rm.png"
                alt="cloud"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.cloudRB)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { x: '20%' },
                visible: { x: 0 },
              }}
            >
              <Image
                className={styles.image}
                width="252"
                height="64"
                src="/cloud-rb.png"
                alt="cloud"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.sparkles)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <Image
                className={styles.image}
                width="120"
                height="54"
                src="/sparkles.png"
                alt="sparkles"
              />
            </motion.div>
            <ZoomIn
              className={clsx(styles.motionDiv, styles.uranus)}
              duration={loadAnimtaionDuration}
            >
              <Image
                className={styles.image}
                width="120"
                height="54"
                src="/uranus.png"
                alt="Uranus"
              />
            </ZoomIn>
            <Image
              className={styles.dust}
              width="382"
              height="231"
              src="/dust.png"
              alt="dust"
            />
            <Image
              className={styles.uranusLightnings2}
              width="414"
              height="195"
              src="/uranus-lightnings2.png"
              alt="uranus lightnings"
            />
            <Image
              className={styles.planet3}
              width="390"
              height="390"
              src="/planet3.png"
              alt="planet"
            />
            <motion.div
              className={clsx(styles.motionDiv, styles.coliseum)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { y: '15%', scale: 0.9 },
                visible: { y: '0%', scale: 1 },
              }}
              style={{ y: useParallax(scrollYProgress, 100) }}
            >
              <Image
                className={styles.image}
                width="350"
                height="260"
                src="/coliseum-asteroid.png"
                alt="coliseum"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.planet1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { y: '-30px', x: '100px', rotate: 5 },
                visible: { y: '0', x: '0', rotate: -2.5 },
              }}
            >
              <Image
                className={styles.iamge}
                width="469"
                height="363"
                src="/planet1.png"
                alt="planet"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.planet2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { y: '-50px', x: '-100px', rotate: -2.5 },
                visible: { y: '0', x: '0', rotate: 2.5 },
              }}
            >
              <Image
                className={styles.image}
                width="268"
                height="258"
                src="/planet2.png"
                alt="planet"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.uranusLightnings)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { scale: 1.1 },
                visible: { scale: 1 },
              }}
            >
              <Image
                className={styles.image}
                width="414"
                height="195"
                src="/uranus-lightnings.png"
                alt="uranus lightnings"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.planet4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { y: '-15%', x: '40%', rotate: '-20deg' },
                visible: { y: '0%', x: '0%', rotate: '0deg' },
              }}
            >
              <Image
                className={styles.image}
                width="118"
                height="141"
                src="/planet4.png"
                alt="planet"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.planet5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { y: '30%', x: '-40%', rotate: '20deg' },
                visible: { y: '0', x: '0', rotate: '0' },
              }}
            >
              <Image
                className={styles.image}
                width="172"
                height="196"
                src="/planet5.png"
                alt="planet"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.asteroid1)}
              style={{ y: useParallax(scrollYProgress, 200) }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { y: '50%' },
                visible: { y: '0%' },
              }}
            >
              <Image
                className={styles.image}
                width="58"
                height="55"
                src="/asteroid1.png"
                alt="asteroid"
                style={{ width: '100%', height: 'auto' }}
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.asteroid2)}
              style={{ y: useParallax(scrollYProgress, 100) }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { y: '-50%' },
                visible: { y: '0%' },
              }}
            >
              <Image
                className={styles.image}
                width="58"
                height="55"
                src="/asteroid2.png"
                alt="asteroid"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.asteroid3)}
              style={{ y: useParallax(scrollYProgress, 150) }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { y: '-30%' },
                visible: { y: '0%' },
              }}
            >
              <Image
                className={styles.image}
                width="50"
                height="73"
                src="/asteroid3.png"
                alt="asteroid"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.asteroid4)}
              style={{ y: useParallax(scrollYProgress, 150) }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { y: '-20%' },
                visible: { y: '0%' },
              }}
            >
              <Image
                className={styles.image}
                width="66"
                height="34"
                src="/asteroid4.png"
                alt="asteroid"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.asteroid5)}
              style={{ y: useParallax(scrollYProgress, 200) }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { y: '20%' },
                visible: { y: '0%' },
              }}
            >
              <Image
                className={styles.image}
                width="19"
                height="20"
                src="/asteroid5.png"
                alt="asteroid"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.asteroid6)}
              style={{ y: useParallax(scrollYProgress, 160) }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { y: '-30%' },
                visible: { y: '0%' },
              }}
            >
              <Image
                className={styles.image}
                width="66"
                height="64"
                src="/asteroid1.png"
                alt="asteroid"
              />
            </motion.div>
            <motion.div
              className={clsx(styles.motionDiv, styles.asteroid7)}
              style={{ y: useParallax(scrollYProgress, 100) }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: loadAnimtaionDuration,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { y: '-50%' },
                visible: { y: '0%' },
              }}
            >
              <Image
                className={styles.image}
                width="33"
                height="31"
                src="/asteroid5.png"
                alt="asteroid"
              />
            </motion.div>
            <SlideIn>
              <h1 className={styles.description}>
                {
                  'Blockchain game for cryptocurrency stakes \nStrategic PvP gameplay and full transparency'
                }
              </h1>
            </SlideIn>
          </div>
          <HowItWorks isAlreadyWrapped={true} />
        </div>
      </Wrapper>
      <div className={styles.arenaWrapper}>
        <motion.div
          className={clsx(styles.motionDiv, styles.arena)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            amount: 0.5,
          }}
          variants={{
            hidden: { y: '30%' },
            visible: { y: '0' },
          }}
        >
          <Image
            className={styles.image}
            src="/arena.png"
            width="690"
            height="272"
            alt="arena"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
