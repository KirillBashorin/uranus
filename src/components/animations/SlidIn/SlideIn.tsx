'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface ISlideInProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  initialScale?: number;
}

const SlideIn: FC<ISlideInProps> = ({
  children,
  className,
  initialScale,
  duration,
}) => {
  const animationDuration = duration ? duration : 1;
  const animationInitialScale = initialScale ? initialScale : 0.8;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: animationDuration,
        ease: 'easeInOut',
      }}
      variants={{
        hidden: { opacity: 0, y: '2em' },
        visible: { opacity: 1, y: '0em' },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
