'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface IZoomInProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  initialScale?: number;
}

const ZoomIn: FC<IZoomInProps> = ({
  children,
  className,
  initialScale,
  duration,
}) => {
  const animationDuration = duration ? duration : 0.6;
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
        hidden: { scale: animationInitialScale },
        visible: { scale: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomIn;
