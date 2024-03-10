import React, { FC } from 'react';
import clsx from 'clsx';

import FacebookSVG from '/public/icons/facebook.svg';
import GithubSVG from '/public/icons/github.svg';
import MediumSVG from '/public/icons/medium.svg';
import DiscordSVG from '/public/icons/discord.svg';
import TwitterSVG from '/public/icons/twitter.svg';

import styles from './Socials.module.css';

const enum SocialIcons {
  FACEBOOK = 'facebook',
  GITHUB = 'github',
  MEDIUM = 'medium',
  DISCORD = 'discord',
  TWITTER = 'twitter',
}

interface ISocialIcons {
  [key: string]: React.ReactNode;
}

const iconsList: ISocialIcons = {
  [SocialIcons.FACEBOOK]: <FacebookSVG className={styles.icon} />,
  [SocialIcons.GITHUB]: <GithubSVG className={styles.icon} />,
  [SocialIcons.MEDIUM]: <MediumSVG className={styles.icon} />,
  [SocialIcons.DISCORD]: <DiscordSVG className={styles.icon} />,
  [SocialIcons.TWITTER]: <TwitterSVG className={styles.icon} />,
};

interface ISocialsProps {
  items: {
    icon: string;
    link: string;
  }[];
  className?: string;
}

const Socials: FC<ISocialsProps> = ({ items, className }) => {
  const socialsClassNames = clsx(className, styles.root);
  return (
    <ul className={socialsClassNames}>
      {items &&
        items.length &&
        items.map((item) => (
          <li key={item.link}>
            <a href={item.link} className={styles.link} target="_blank">
              {iconsList[item.icon]}
            </a>
          </li>
        ))}
    </ul>
  );
};

export { SocialIcons };
export default Socials;
