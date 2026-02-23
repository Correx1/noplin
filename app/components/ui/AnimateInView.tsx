'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'up' | 'left' | 'right' | 'fade';

interface AnimateInViewProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  style?: React.CSSProperties;
}

const variants: Record<Direction, Variants> = {
  up: {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  left: {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  right: {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

const TRANSITION = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
};

export default function AnimateInView({
  children,
  delay = 0,
  direction = 'up',
  className,
  style,
}: AnimateInViewProps) {
  return (
    <motion.div
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ ...TRANSITION, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Stagger container — wrap a set of children to stagger them
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Use this on the wrapper + AnimateInView on each child for staggered card grids
export function StaggerContainer({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
