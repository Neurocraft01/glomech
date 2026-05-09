'use client';

import { motion } from 'framer-motion';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image?: string;
}

export default function PageHeader({ title, subtitle, image = '/hero.png' }: PageHeaderProps) {
  return (
    <div className={styles.header} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
