'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Shield } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className={styles.hero}>
      {/* Parallax background */}
      <motion.div className={styles.bg} style={{ y }} />

      {/* Gradient overlays */}
      <div className={styles.gradientTop} />
      <div className={styles.gradientBottom} />

      {/* Noise texture overlay */}
      <div className={styles.noise} />

      {/* Animated grid lines */}
      <div className={styles.grid} />

      <motion.div className={styles.content} style={{ opacity }}>
        {/* Top pill badges */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={styles.pills}
        >
          <span className={styles.pill}>
            <Star size={12} fill="currentColor" strokeWidth={0} />
            5.0 Google Rating
          </span>
          <span className={styles.pillOutline}>Est. 2022 · Pune, India</span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={styles.headlineWrap}
        >
          <h1 className={styles.headline}>
            <span className={styles.headlineLine}>Heavy Structural</span>
            <span className={styles.headlineAccent}>Fabrication</span>
            <span className={styles.headlineLine}>Experts</span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={styles.sub}
        >
          Precision-engineered steel structures for India's infrastructure — 
          delivered on time, every time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={styles.ctas}
        >
          <Link href="/contact" className="btn-accent">
            Request a Quote <ArrowRight size={18} />
          </Link>
          <Link href="/products" className="btn-outline">
            Our Products
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={styles.statsBar}
        >
          <div className={styles.statDivider} />
          {[
            { value: '960 MT', label: 'Annual Production', icon: <TrendingUp size={16} /> },
            { value: '40K sqft', label: 'Factory Area', icon: <Shield size={16} /> },
            { value: '₹8.35Cr', label: 'FY25–26 Turnover', icon: <TrendingUp size={16} /> },
            { value: '10+', label: 'Years Experience', icon: <Shield size={16} /> },
          ].map((s, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className={styles.scrollIndicator}
      >
        <span>Scroll</span>
        <div className={styles.scrollLine}>
          <motion.div
            className={styles.scrollDot}
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
