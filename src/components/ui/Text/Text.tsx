import React, { FC } from 'react';
import clsx from 'clsx';

import { P } from '@/components/elements';

import styles from './Text.module.css';

interface ITextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: FC<ITextProps> = ({ children, className }) => {
  const textClassNames = clsx([className, styles.text]);

  return <P className={textClassNames}>{children}</P>;
};

export default Text;
