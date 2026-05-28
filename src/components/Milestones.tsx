'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { companyInfo } from '@/data/company';
import { useRef } from 'react';
import styles from './Milestones.module.css';

export default function Milestones() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <div ref={ref} className={styles.wrapper}>
      {/* section label */}
      <div className={styles.labelRow}>
        <span className="overline" style={{ color: 'rgba(255,255,255,0.4)' }}>Growth Trajectory</span>
        <span className={styles.subLabel}>Year-on-Year Excellence</span>
      </div>

      {/* scrolling headline */}
      <div className={styles.headlineTrack}>
        <motion.h2 className={styles.bigline} style={{ x }}>
          Milestones &nbsp;&nbsp; · &nbsp;&nbsp; Milestones &nbsp;&nbsp; · &nbsp;&nbsp; Milestones
        </motion.h2>
      </div>

      {/* cards */}
      <div className={styles.cards}>
        {companyInfo.milestones.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={styles.card}
          >
            <div className={styles.cardTop}>
              <span className={styles.year}>{item.year}</span>
              <div className={styles.badge2}>FY</div>
            </div>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.mLabel}>Production</span>
                <span className={styles.mValue}>{item.production}</span>
              </div>
            </div>
            <p className={styles.details}>{item.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
