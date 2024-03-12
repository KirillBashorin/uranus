import React, { FC } from 'react';
import Link from 'next/link';

import Config from '../../../../config.json';

import TwitterBadge from '/public/icons/twitter-badge.svg';

import styles from './Badge.module.css';

const Badge: FC = () => {
  return (
    <div className={styles.root}>
      <Link className={styles.link} href={Config.twitter} target="_blank">
        <TwitterBadge className={styles.icon} />
      </Link>
    </div>
  );
};

export default Badge;
