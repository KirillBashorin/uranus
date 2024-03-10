import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Text.module.css';

interface ITextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: FC<ITextProps> = ({ children, className }) => {
  const textClassNames = clsx(className, styles.text);

  return <p className={textClassNames}>{children}</p>;
};

export default Text;
