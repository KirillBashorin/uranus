import React, { FC } from 'react';
import Image from 'next/image';

import Wrapper from '@/components/layout/Wrapper';
import HowItWorks from '@/components/blocks/HowItWorks';

import styles from './Hero.module.css';

const Hero: FC = () => {
  return (
    <section className={styles.root}>
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
            <Image
              className={styles.cloudLT}
              width="143"
              height="76"
              src="/cloud-lt.png"
              alt="cloud"
            />
            <Image
              className={styles.cloudLM1}
              width="177"
              height="46"
              src="/cloud-lm1.png"
              alt="cloud"
            />
            <Image
              className={styles.cloudLM2}
              width="248"
              height="139"
              src="/cloud-lm2.png"
              alt="cloud"
            />
            <Image
              className={styles.cloudLB}
              width="84"
              height="62"
              src="/cloud-lb.png"
              alt="cloud"
            />
            <Image
              className={styles.cloudRT}
              width="130"
              height="39"
              src="/cloud-rt.png"
              alt="cloud"
            />
            <Image
              className={styles.cloudRM}
              width="163"
              height="91"
              src="/cloud-rm.png"
              alt="cloud"
            />
            <Image
              className={styles.cloudRB}
              width="252"
              height="64"
              src="/cloud-rb.png"
              alt="cloud"
            />
            <Image
              className={styles.sparkles}
              width="120"
              height="54"
              src="/sparkles.png"
              alt="sparkles"
            />
            <Image
              className={styles.uranus}
              width="120"
              height="54"
              src="/uranus.png"
              alt="Coming soon"
            />
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
            <Image
              className={styles.coliseum}
              width="350"
              height="260"
              src="/coliseum-asteroid.png"
              alt="coliseum"
            />
            <Image
              className={styles.planet1}
              width="469"
              height="363"
              src="/planet1.png"
              alt="planet"
            />
            <Image
              className={styles.planet2}
              width="268"
              height="258"
              src="/planet2.png"
              alt="planet"
            />
            <Image
              className={styles.uranusLightnings}
              width="414"
              height="195"
              src="/uranus-lightnings.png"
              alt="uranus lightnings"
            />
            <Image
              className={styles.planet4}
              width="118"
              height="141"
              src="/planet4.png"
              alt="planet"
            />
            <Image
              className={styles.planet5}
              width="172"
              height="196"
              src="/planet5.png"
              alt="planet"
            />
            <Image
              className={styles.asteroid1}
              width="58"
              height="55"
              src="/asteroid1.png"
              alt="asteroid"
            />
            <Image
              className={styles.asteroid2}
              width="58"
              height="55"
              src="/asteroid2.png"
              alt="asteroid"
            />
            <Image
              className={styles.asteroid3}
              width="50"
              height="73"
              src="/asteroid3.png"
              alt="asteroid"
            />
            <Image
              className={styles.asteroid4}
              width="66"
              height="34"
              src="/asteroid4.png"
              alt="asteroid"
            />
            <Image
              className={styles.asteroid5}
              width="19"
              height="20"
              src="/asteroid5.png"
              alt="asteroid"
            />
            <Image
              className={styles.asteroid6}
              width="66"
              height="64"
              src="/asteroid1.png"
              alt="asteroid"
            />
            <Image
              className={styles.asteroid7}
              width="33"
              height="31"
              src="/asteroid5.png"
              alt="asteroid"
            />
            <p className={styles.description}>
              {
                'Blockchain game for cryptocurrency stakes \nStrategic PvP gameplay and full transparency'
              }
            </p>
          </div>
          <HowItWorks isAlreadyWrapped={true} />
        </div>
      </Wrapper>
      <div className={styles.arenaWrapper}>
        <Image
          className={styles.arena}
          src="/arena.png"
          width="690"
          height="272"
          alt="arena"
        />
      </div>
    </section>
  );
};

export default Hero;
