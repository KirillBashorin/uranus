import React, { FC } from 'react';

import Wrapper from '@/components/layout/Wrapper';
import Title from '@/components/ui/Title';
import Socials, { SocialIcons } from '@/components/ui/Socials';

import styles from './Footer.module.css';

const socialItems = [
  {
    icon: SocialIcons.FACEBOOK,
    link: '#fb',
  },
  {
    icon: SocialIcons.GITHUB,
    link: '#github',
  },
  {
    icon: SocialIcons.MEDIUM,
    link: '#medium',
  },
  {
    icon: SocialIcons.DISCORD,
    link: '#discord',
  },
  {
    icon: SocialIcons.TWITTER,
    link: '#twitter',
  },
];

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.inner}>
          <Title className={styles.title}>Contacts</Title>
          <a className={styles.email} href="mailto:unfo@uranus.com">
            unfo@uranus.com
          </a>
          <Socials items={socialItems} />
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
