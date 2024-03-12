import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

import Socials, { SocialIcons } from '@/components/ui/Socials';

import styles from './Header.module.css';

const socialItems = [
  {
    icon: SocialIcons.DISCORD,
    link: '#1',
  },
  {
    icon: SocialIcons.FACEBOOK,
    link: '#2',
  },
  {
    icon: SocialIcons.GITHUB,
    link: '#3',
  },
  {
    icon: SocialIcons.MEDIUM,
    link: '#4',
  },
  {
    icon: SocialIcons.TWITTER,
    link: '#5',
  },
];

const navItems = [
  {
    text: 'How it Works',
    link: '/#how-it-works',
  },
  {
    text: 'Gameplay',
    link: '/#gameplay',
  },
  {
    text: 'Narrative',
    link: '/#narrative',
  },
  {
    text: 'Updates',
    link: '/#updates',
  },
  {
    text: 'Contacts',
    link: '/#contacts',
  },
];

const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollTop, setIsScrollTop] = useState(false);

  const rootClassNames = clsx([
    styles.root,
    isMenuOpened && styles.opened,
    isScrolled && styles.scrolled,
    isScrolled && isScrollTop && styles.show,
  ]);
  const burgerClassNames = clsx([styles.burger, isMenuOpened && styles.close]);

  const handlerBurgerButton = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > 0 && currentScrollY < prevScrollY) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isMenuOpened]);

  return (
    <header className={rootClassNames}>
      <button
        className={burgerClassNames}
        type="button"
        onClick={handlerBurgerButton}
      >
        <span></span>
        <span></span>
      </button>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navItems &&
            navItems.length &&
            navItems.map((navItem) => (
              <li className={styles.item} key={navItem.text}>
                <Link
                  className={styles.link}
                  href={navItem.link}
                  onClick={() => setIsMenuOpened(false)}
                >
                  {navItem.text}
                </Link>
              </li>
            ))}
        </ul>
        <Socials className={styles.socials} items={socialItems} />
      </nav>
      <Image
        className={styles.badge}
        width="120"
        height="54"
        src="/icons/soon.svg"
        alt="Coming soon"
      />
    </header>
  );
};

export default Header;
