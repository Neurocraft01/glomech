'use client';
import { motion } from 'framer-motion';
import { companyInfo } from '@/data/company';
import styles from './Milestones.module.css';

export default function Milestones() {
  return (
    <div className={styles.wrapper}>
      {/* section label */}
      <div className={styles.labelRow}>
        <span className="overline" style={{ color: 'rgba(255,255,255,0.4)' }}>Growth Trajectory</span>
        <span className={styles.subLabel}>Year-on-Year Excellence</span>
      </div>

      {/* headline */}
      <div className={styles.headlineTrack}>
        <h2 className={styles.bigline}>
          Our Milestones
        </h2>
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
